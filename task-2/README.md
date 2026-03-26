# Simple Calculator

## Objective
The goal of this project is to build a basic, responsive calculator that handles fundamental arithmetic operations like addition, subtraction, multiplication, and division.

## Solution Implemented
This solution is built using semantic HTML5 and vanilla JavaScript. Key features include:
- **Expression-Based Evaluation**: The internal state is maintained as a string, allowing for multi-step calculations and proper order of operations (PEMDAS).
- **Dynamic UI Rendering**: The interface is built using CSS Grid for precise button alignment and mobile responsiveness.
- **Precision Floating Point Logic**: Specifically handles JavaScript's floating-point math issues ensures accurate results (e.g., `0.1 + 0.2 = 0.3`).

## Requirements
- **Interactive UI**: Number and operator buttons implemented in HTML with distinct stylings for usability.
- **Calculation Engine**: JavaScript capture and processing to manage user inputs and perform math.
- **Live Display**: Real-time feedback in the display area as the user interacts with the calculator.

## Setup Instructions
1. **Download**: Clone or download the project files into a local folder.
2. **Launch**: Open `index.html` in any web browser (no local server required).
3. **Usage**: Click number and operator buttons to build a calculation, then press `=` to see the result. Use `C` to reset.

## Dependencies
This application is built entirely with **Vanilla Web Technologies** and has no external dependencies or libraries:
- **HTML5**: For semantic structure.
- **CSS3**: For custom styling and layout.
- **JavaScript (ES6+)**: For core logic and state management.
