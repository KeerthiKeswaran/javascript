# Infinite Scrolling Content Loader

## Objective
The objective of this project is to implement an infinite scroll mechanism that dynamically loads more content as the user scrolls towards the bottom of the page. This mimics the core behavior of social media feeds and large-scale content platforms.

## Solution Implemented
This solution leverages the **window.scroll** event and the **Fetch API** to create a seamless loading experience.
1.  **Bottom Detection**: The script calculates the distance between the user's current scroll position and the total height of the document. If it's within 100px of the bottom, a load request is triggered.
2.  **Simulation Layer**: It uses the standard `fetch()` call to retrieve JSON data from a local file. To enhance user feedback, a 1-second synthetic delay is added to show the loader animation.
3.  **State Management**: An `isLoading` flag ensures that multiple load requests aren't fired at the same time if the user continues to scroll while the fetch is pending.
4.  **UI Feedback**: A CSS-based bounce loader provides clear visual feedback that more content is on the way.

## Requirements
- **Scroll Detection**: Automatically trigger new content loading without clicking "Load More".
- **Asynchronous Loading**: Use the Fetch API to retrieve mock data.
- **Efficient DOM Updates**: Append new elements to the existing post list without reloading the layout.
- **Minimalistic UI**: Ensure a clean, mobile-first design with clear typography.

## Setup Instructions
1.  **Download Files**: Ensure you have `index.html`, `style.css`, `script.js`, and the `data/posts.json` folder structure.
2.  **Open Browser**: Open `index.html` in your browser.
3.  **Scroll Down**: As you reach the bottom of the page, new posts will automatically be appended.
    - *Note: Since this uses the Fetch API, it may require a local server (like VS Code's Live Server) to work correctly depending on your browser's security policy for local files.*

## Dependencies
- **Vanilla JS**: No third-party libraries required.
- **Vanilla CSS**: Standard CSS used for all layouts and animations.
- **Fetch API**: Modern browser built-in for handling network requests.
