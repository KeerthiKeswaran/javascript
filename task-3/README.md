# Image Gallery Lightbox

## Objective
The goal of this project is to develop an interactive image gallery where clicking a thumbnail opens a larger, detailed version of the content in a modal or lightbox overlay.

## Solution Implemented
This project is built using a **vintage YouTube aesthetic** ("BirdTube") that showcases a gallery of birds. Key implementation details include:
- **Modular Data Management**: Bird profiles are managed in a separate `birdData.js` file and imported as an ES6 module, ensuring clean separation of data and logic.
- **Dynamic Content Injection**: A central `script.js` iterates through the data to generate the gallery and updates the lightbox content in real-time based on the user's selection.
- **Classic Navigation**: Includes a togglable sidebar (hamburger menu) and a search-focused header to maintain the "BirdTube" theme.
- **Immersive Blog Modal**: When a thumbnail is clicked, a large, blog-style modal overlays the screen, providing detailed information about the bird.

## Requirements
To meet the project goals, the following features were implemented:
- **Event Listeners**: JavaScript event listeners are attached to each thumbnail to detect user clicks.
- **Dynamic Updates**: The modal content (image, title, and description) is dynamically updated via the DOM when a bird is selected.
- **CSS Transitions & Toggles**: Smooth fade and scaling transitions are achieved by toggling the `.hidden` and `.collapsed` CSS classes.

## Setup Instructions
1. **Assets**: Ensure your bird images are placed in an `assets/` folder within the `task-3` directory.
2. **Local Server (Required)**: Because this project uses **ES6 Modules** (`import/export`), it cannot be run by opening the file directly (the `file:///` protocol). Use a local server such as:
   - **VS Code Live Server** extension.
   - Running `npx serve` in the terminal.
3. **Launch**: Open `index.html` through your local server URL.

## Dependencies
This application is built with **Vanilla Web Technologies** and requires no external libraries:
- **HTML5**: For semantic layout (`<main>`, `<section>`, `<output>`).
- **CSS3**: For custom styling and smooth animations.
- **JavaScript (ES6+)**: For modularity, event management, and state handling.
