# Single-Page Application (SPA) with Hash-based Routing

## Objective
Build a basic Single-Page Application that allows navigation between multiple views without reloading the page. The specific focus is on mastering **hash-based routing** using native browser events.

## Solution Implemented
The application uses a **vanilla JavaScript** routing engine to handle state transitions. Instead of serving multiple HTML files, the system:
1.  Registers a global listener for the `window.onhashchange` event.
2.  Maps URL fragment identifiers (e.g., `#home`, `#services`) to a local data store of HTML templates.
3.  Injects the corresponding content into a central `<main id="app">` container whenever the hash changes.
4.  Includes a fallback mechanism (404 page) for unrecognized hashes.
5.  Uses CSS animations to provide smooth transitions between views, mimicking the feel of a modern web framework.

## Requirements
- **Hash-based Routing**: Navigation must rely on URL fragments and the `onhashchange` event.
- **Dynamic Loading**: Views must be swapped without a full browser refresh.
- **Consistent UI**: Persistent navigation bar across all routes.
- **Multi-page Support**: At least 4-5 distinct sections (Home, Services, Projects, Team, Contact).

## Setup Instructions
1.  **Clone or Download**: Save the project files to your local machine.
2.  **Open Browser**: Simply open the `index.html` file in any modern web browser (Chrome, Firefox, Safari, Edge).
3.  **Navigate**: Click the links in the navigation bar to see the hash-based routing in action.
    - *Note: No local server is strictly required for this project, as hashes are handled entirely on the client side.*

## Dependencies
- **None**: This project is built entirely with vanilla **HTML5**, **CSS3**, and **JavaScript (ES6)**. No external libraries, frameworks, or build tools are required.
