# Multi-Container Drag and Drop

## Objective
The objective is to implement a robust task management system that allows users to reorder items within their original list and seamlessly move tasks between different columns (e.g., from "Pending" to "Completed").

## Solution Implemented
This solution enhances the standard Drag and Drop API to support multiple drop targets. Key features include:

- **🔄 Intelligent Reordering**: The logic calculates position relative to other items within the same list for fine-tuned reordering.
- **📦 Multi-Column Support**: Users can move items between the "Pending Tasks" and "Completed Tasks" containers with a single drag-and-drop gesture.
- **🧩 Empty Container Handling**: The entire list container is established as a drop target, allowing items to be dropped into empty lists without requiring an existing child element.
- **✨ Enhanced Visual Feedback**:
    - **Item Level**: Items show top-border highlights when hovered over.
    - **Container Level**: Entire list areas display a dashed highlight to confirm they can receive the current item.
- **Modern UI**: Uses a clean side-by-side flexbox layout with elegant typography and crisp card styles.

## Requirements
- A modern browser that supports standard HTML5 and JavaScript ESM syntax.
- No external dependencies or libraries required.

## Setup Instructions
1.  **Launch**: Open `index.html` in any modern browser.
2.  **Move Tasks**: Drag any task from the first column and drop it into the second column or reorder it within its original list.
3.  **Observation**: Watch for the container-level highlight (dashed border) showing where your item will land.

## Dependencies
- **Native JavaScript**: Core Drag-and-Drop and Event Handling.
- **Vanilla CSS**: Styled using standard flexbox and property transitions.
- **HTML5**: Leverages the `draggable="true"` attribute.
