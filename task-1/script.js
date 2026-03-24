// State Management
let tasks = JSON.parse(localStorage.getItem('tasks')) || [
    { id: 1, name: 'Sample Task 1', desc: 'Welcome to your minimalist To-Do list!', completed: false },
    { id: 2, name: 'Sample Task 2', desc: 'Check back later to see if it works.', completed: true }
];

// Select DOM Elements
const taskContainer = document.getElementById('task-container');
const formOverlay = document.getElementById('form-overlay');
const taskForm = document.getElementById('task-form');
const addBtn = document.getElementById('add-task-trigger');
const closeFormBtn = document.getElementById('close-form-btn');

// Initial Render
renderTasks();

// Event Listeners
addBtn.addEventListener('click', openForm);
closeFormBtn.addEventListener('click', closeForm);
taskForm.addEventListener('submit', addTask);

// Functions
function renderTasks() {
    taskContainer.innerHTML = '';
    
    if (tasks.length === 0) {
        taskContainer.innerHTML = `
            <div style="text-align: center; color: #adb5bd; padding-top: 40px;">
                <p>No tasks yet. Feel free to add some!</p>
            </div>
        `;
    }

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;
        taskElement.dataset.id = task.id;
        
        taskElement.innerHTML = `
            <input type="checkbox" class="task-check" ${task.completed ? 'checked' : ''}>
            <div class="task-component">
                <h3>${task.name}</h3>
                <p>${task.desc}</p>
            </div>
            <button class="delete-btn" title="Delete Task" aria-label="Delete Task">&times;</button>
        `;

        // Event delegation logic inside iteration for simplicity, could be optimized
        const checkbox = taskElement.querySelector('.task-check');
        const deleteBtn = taskElement.querySelector('.delete-btn');

        checkbox.addEventListener('change', () => toggleComplete(task.id));
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteTask(task.id);
        });

        taskContainer.appendChild(taskElement);
    });
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function openForm() {
    formOverlay.classList.add('active');
    document.getElementById('task-name').focus();
}

function closeForm() {
    formOverlay.classList.remove('active');
    taskForm.reset();
}

function addTask(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('task-name');
    const descInput = document.getElementById('task-description');
    
    if (!nameInput.value.trim()) return;

    const newTask = {
        id: Date.now(),
        name: nameInput.value.trim(),
        desc: descInput.value.trim(),
        completed: false
    };

    tasks.unshift(newTask); // Add to the top of the list
    saveToLocalStorage();
    renderTasks();
    closeForm();
}

function toggleComplete(id) {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveToLocalStorage();
    renderTasks();
}

function deleteTask(id) {
    const taskElement = taskContainer.querySelector(`.task-item[data-id="${id}"]`);
    if (taskElement) {
        taskElement.style.opacity = '0';
        taskElement.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            tasks = tasks.filter(task => task.id !== id);
            saveToLocalStorage();
            renderTasks();
        }, 300);
    }
}