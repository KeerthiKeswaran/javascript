# Interactive To-Do List Application

## Objective
The primary goal of this project is to create a simple, intuitive, and persistent To-Do list application. Users can manage their daily tasks efficiently by adding new items, marking them as complete, and removing irrelevant tasks.

## Solution Implemented
This solution utilizes a state-driven approach with vanilla JavaScript and CSS. Key technical choices include:
- **Centralized State Management**: A simple `tasks` array maintains the application state.
- **Dynamic DOM Rendering**: A dedicated `renderTasks` function ensures the UI is always in sync with the current list of tasks.
- **Local Persistence**: Tasks are saved to the browser's `localStorage`, allowing user data to persist across page refreshes and browser sessions.
- **Event Delegation & Direct Handling**: Event listeners manage form submissions, toggling task status, and deleting items with smooth transitions.
- **Minimalist Aesthetic**: A neutral, high-contrast UI designed for clarity and ease of use, utilizing a modern modal-based form for task creation.

## Requirements
To meet the project goals, the following features were implemented:
- **Task Creation**: Add tasks with both a title and an optional description.
- **Task Deletion**: Remove tasks instantly using a dedicated delete button.
- **Completion Tracking**: A checkbox to toggle the completion status of any task, visually represented with a strikethrough.
- **Storage Persistence**: Tasks survive browser refreshes.

## Setup Instructions
1. **Clone or Download**: Copy the application files to your local machine.
2. **Open in Browser**: Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).
3. **Usage**:
   - Click "Add New Task" to open the creation modal.
   - Enter task details and click "Add Task" or press Enter.
   - Click the checkbox to mark a task as complete.
   - Click the "&times;" button to remove a task.

## Dependencies
This project is built using **Vanilla Web Technologies** and requires no external libraries or frameworks:
- **HTML5**: For semantic structure.
- **CSS3**: For minimal styling and animations.
- **JavaScript (ES6+)**: For logic, state management, and DOM manipulation.
