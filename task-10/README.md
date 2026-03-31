# Full-featured eCommerce Shopping Cart

## Objective
Build a comprehensive eCommerce simulation that includes product listings, a shopping cart, and dynamic price calculations. This task focuses on modular JavaScript, state persistence, and responsive UI design.

## Solution Implemented
This project is built using a **modular ES6 architecture**, separating business logic from UI rendering:
1.  **Modular State Management**: A `Cart` class (in `modules/cart.js`) handles all adding, removing, and quantity adjustments. It uses `localStorage` to keep the user's cart saved even after a page refresh.
2.  **UI/DOM Separation**: A static `UI` class (in `modules/ui.js`) manages all rendering. This keeps the main application logic clean and focused on data flow.
3.  **Real-time Calculations**: Prices, taxes (18%), and sub-totals are automatically recalculated whenever the cart state changes.
4.  **Integrated Filtering**: A search bar and category dropdown allow users to filter the product grid in real-time.
5.  **Modern Drawer Interface**: A slide-out sidebar is used for the shopping cart to maintain better focus on the product grid on smaller screens.
6.  **Error Handling**: Basic error handling is included during the fetch operation to alert users if the product data cannot be loaded.

## Requirements
- **Product Listing**: Fetch products from a local JSON data source.
- **Shopping Cart**: Add to cart, adjust quantities, and remove items.
- **State Management**: Persist cart state in `localStorage`.
- **Dynamic Pricing**: Recalculate totals and taxes automatically.
- **Search & Filter**: Filter by category or search by product name.
- **Responsive UI**: Adjust layout for mobile and desktop screens.
- **Modular JS**: Use ES6 `export/import` modules.

## Setup Instructions
1.  **Clone Files**: Ensure all modular files in `modules/` and product data in `data/` are present.
2.  **Run with Server**: Because this project uses **ES6 modules**, you MUST run it using a local server (e.g., VS Code "Live Server") to avoid CORS errors with file schemes.
3.  **Search & Shop**: Start typing in the search bar or clicking "Add to Cart" to see the engine in action.

## Dependencies
- **Vanilla JavaScript**: Pure JS with no external frameworks.
- **Vanilla CSS**: Responsive design using Grid and Flexbox.
- **localStorage**: Built-in browser storage.

---

### Assets Required
Please add the following images to the `task-10/assets/` folder to match the product data:
1.  `white_tee.jpg` — (Classic White Tee)
2.  `denim_jacket.jpg` — (Blue Denim Jacket)
3.  `headphones.jpg` — (Noise-Cancelling Headphones)
4.  `keyboard.jpg` — (Mechanical Keyboard)
5.  `watch.jpg` — (Minimalist Analog Watch)
6.  `backpack.jpg` — (Leather Travel Backpack)
