# Dynamic Quiz Application

## Objective
The goal is to create an interactive quiz application that dynamically loads questions, tracks user scores, and provides immediate feedback with detailed explanations for each answer.

## Solution Implemented
The application is built using a clean, modern approach to dynamic DOM manipulation. Key features include:

- **JSON-Driven Data**: Quiz questions, options, and explanations are stored in an external `questions.json` file, making them easy to manage and update.
- **Dynamic Question Loading**: The JavaScript logic asynchronously fetches the JSON data and injects it into the DOM based on the quiz progress.
- **Immediate Feedback**: Users receive instant visual cues (Green/Red) upon answering, accompanied by a dynamic explanation of the correct answer.
- **Dynamic Score Tracking**: The app calculates the final score and provides a summary upon completion.
- **Responsive & Minimalist UI**: The design focuses on readability and user focus, using a centered card layout.

## Requirements
- A modern web browser to view the application.
- A local web server (to fetch the `questions.json` file).

## Setup Instructions
1.  **Clone or Download**: Ensure the `index.html`, `style.css`, `script.js`, and `questions.json` files are in the same directory.
2.  **Run with Local Server**: 
    - Open the directory in VS Code.
    - Right-click `index.html` and select **"Open with Live Server"**.
    - Alternatively, use any simple HTTP server (like Python's `http.server`).
3.  **Start the Quiz**: Once the browser opens, start answering the questions!

## Dependencies
- **No external libraries**: This project uses only native JavaScript, HTML5, and CSS3.
- **Fetch API**: For loading the data asynchronously.
