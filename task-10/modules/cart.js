/**
 * Cart Module
 * Manages adding, removing, and state persistence
 */
export class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart_items')) || [];
        this.taxRate = 0.18;
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        this.save();
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.save();
    }

    updateQuantity(id, amount) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.quantity += amount;
            if (item.quantity <= 0) {
                this.removeItem(id);
            }
        }
        this.save();
    }

    getTotals() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * this.taxRate;
        const total = subtotal + tax;
        return { subtotal, tax, total };
    }

    save() {
        localStorage.setItem('cart_items', JSON.stringify(this.items));
        // Simple event based refresh
        document.dispatchEvent(new CustomEvent('cartUpdated'));
    }
}
