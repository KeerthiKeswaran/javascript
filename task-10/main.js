import { Cart } from './modules/cart.js';
import { UI } from './modules/ui.js';

let products = [];
const cart = new Cart();

/**
 * Initialize components and fetch data
 */
async function init() {
    try {
        const response = await fetch('data/products.json');
        if (!response.ok) throw new Error('Failed to load products');
        products = await response.json();
        
        // Initial render
        render(products);
        updateCartUI();

        // Listen for internal state changes
        document.addEventListener('cartUpdated', updateCartUI);

        // Sidebar event listeners
        document.getElementById('cart-btn').addEventListener('click', () => UI.toggleDrawer(true));
        document.getElementById('close-drawer').addEventListener('click', () => UI.toggleDrawer(false));
        document.getElementById('overlay').addEventListener('click', () => UI.toggleDrawer(false));

        // Search and Filter functionality
        document.getElementById('search').addEventListener('input', (e) => filterAndRender(e.target.value, document.getElementById('filter').value));
        document.getElementById('filter').addEventListener('change', (e) => filterAndRender(document.getElementById('search').value, e.target.value));

    } catch (error) {
        console.error('App init error:', error);
        document.querySelector('.container').innerHTML = `<p class="error">Oops! Something went wrong loading the shop. ${error.message}</p>`;
    }
}

function filterAndRender(searchTerm, category) {
    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === 'all' || p.category === category;
        return matchesSearch && matchesCategory;
    });
    render(filtered);
}

function render(data) {
    UI.renderProducts(data, (p) => {
        cart.addItem(p);
        UI.toggleDrawer(true); // Open cart after add
    });
}

function updateCartUI() {
    UI.renderCart(cart, (id, n) => cart.updateQuantity(id, n), (id) => cart.removeItem(id));
}

// Start
init();
