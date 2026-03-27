# Basic Calculator Application

## Objective
The goal of this project is to build a basic, responsive calculator that handles fundamental arithmetic operations like addition, subtraction, multiplication, and division.

## Solution Implemented
This version of the application follows a modern, modular architecture. Key technical choices include:
- **Custom Calculation Engine**: A manually implemented `CalculatorEngine` class handles expression evaluation without using `eval()` or the JavaScript `Function` constructor.
- **ES Modules**: Utilizes modern ES6 imports/exports to separate calculation logic from UI interactions.
- **Event Delegation**: Instead of inline HTML event handlers, the project uses a single event listener on the button grid for more efficient and semantic event management.
- **Semantic HTML5**: Elements like `<main>`, `<section>`, and `<output>` are used to ensure proper structure and accessibility.
- **Precision Floating Point Logic**: Specifically handles math precision issues to ensure accurate decimal results.

## Requirements
- **Interactive UI**: Number and operator buttons implemented with distinct stylings and data attributes for lean JavaScript integration.
- **Calculation Engine**: A dedicated class to parse and solve string-based mathematical expressions.
- **Live Display**: Real-time feedback in the `<output>` area as the user interacts with the calculator.

## Setup Instructions
1. **Download**: Clone or download the project files into a local folder.
2. **Launch**: Open `index.html` in any modern web browser. 
3. **Usage**: Use the number and operator buttons to build a calculation, then click `=` to solve. Use `C` to reset.

## Dependencies
This application is built entirely with **Vanilla Web Technologies** and has no external dependencies:
- **HTML5**: For semantic structure.
- **CSS3**: For custom styling and responsive layout.
- **JavaScript (ES6+)**: For core logic, ES modules, and state management.
