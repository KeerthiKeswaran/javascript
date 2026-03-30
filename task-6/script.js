const draggableItems = document.querySelectorAll('.draggable-item');
const draggableLists = document.querySelectorAll('.draggable-list');

// Internal state to track the dragged element
let draggedItem = null;

// Add event listeners to all list items (for individual item reordering)
draggableItems.forEach((item) => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('drop', handleDropOnItem);
});

// Add event listeners to list containers (to handle drops on empty lists)
draggableLists.forEach((list) => {
    list.addEventListener('dragover', handleDragOver);
    list.addEventListener('dragenter', handleDragEnterList);
    list.addEventListener('dragleave', handleDragLeaveList);
    list.addEventListener('drop', handleDropOnList);
});

function handleDragStart() {
    draggedItem = this;
    setTimeout(() => this.classList.add('dragging'), 0);
}

function handleDragEnd() {
    draggedItem = null;
    draggableItems.forEach(item => item.classList.remove('dragging', 'over'));
    draggableLists.forEach(list => list.classList.remove('over-list'));
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDropOnItem(e) {
    e.stopPropagation(); // Prevent the list container drop from firing too

    if (this !== draggedItem) {
        // Calculate whether to insert before or after the item based on its position in the list
        const list = this.parentNode;
        const allItems = [...list.querySelectorAll('.draggable-item')];
        const draggedIndex = allItems.indexOf(draggedItem);
        const targetIndex = allItems.indexOf(this);

        if (draggedIndex === -1 || draggedIndex < targetIndex) {
            // Dragged was from another list or above, insert after the target
            list.insertBefore(draggedItem, this.nextSibling);
        } else {
            // Dragged was below, insert before the target
            list.insertBefore(draggedItem, this);
        }
    }
}

function handleDropOnList() {
    this.appendChild(draggedItem);
}

// Visual feedback on individual items
function handleDragEnter() {
    if (this !== draggedItem) this.classList.add('over');
}
function handleDragLeave() {
    this.classList.remove('over');
}

// Visual feedback on lists
function handleDragEnterList() {
    this.classList.add('over-list');
}
function handleDragLeaveList() {
    this.classList.remove('over-list');
}
