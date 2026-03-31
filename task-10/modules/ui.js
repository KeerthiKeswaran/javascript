/**
 * UI Module
 * Handles all DOM changes and event binding
 */
export class UI {
    static renderProducts(products, onAdd) {
        const grid = document.getElementById('product-grid');
        grid.innerHTML = '';
        products.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${p.image}" alt="${p.name}">
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <p>${p.description}</p>
                    <span class="price">₹${p.price}</span>
                    <button class="add-btn" data-id="${p.id}">Add to Cart</button>
                </div>
            `;
            const btn = card.querySelector('.add-btn');
            btn.onclick = () => onAdd(p);
            grid.appendChild(card);
        });
    }

    static renderCart(cart, onUpdate, onRemove) {
        const list = document.getElementById('cart-items');
        const countSpan = document.getElementById('cart-count');
        const { subtotal, tax, total } = cart.getTotals();

        list.innerHTML = '';
        cart.items.forEach(item => {
            const row = document.createElement('div');
            row.className = 'cart-item';
            row.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="price">₹${item.price} x ${item.quantity}</span>
                    <div class="qty-controls">
                        <button onclick="onUpdate(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="onUpdate(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="onRemove(${item.id})">Remove</button>
            `;
            list.appendChild(row);
        });

        // Global functions for inline event handlers (or use event delegation)
        window.onUpdate = onUpdate;
        window.onRemove = onRemove;

        // Totals update
        countSpan.textContent = cart.items.reduce((n, i) => n + i.quantity, 0);
        document.getElementById('subtotal').textContent = subtotal.toFixed(2);
        document.getElementById('tax').textContent = tax.toFixed(2);
        document.getElementById('total').textContent = total.toFixed(2);
    }

    static toggleDrawer(open) {
        document.getElementById('cart-drawer').classList.toggle('open', open);
        document.getElementById('overlay').classList.toggle('active', open);
    }
}
