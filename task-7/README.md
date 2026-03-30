# Real-time Chat Simulation

## Objective
The goal is to develop a highly responsive and realistic chat interface that simulates real-time messaging using native JavaScript logic without a backend.

## Solution Implemented
I have built a clean and modular chat application that focuses on visual feedback and dynamic state management. Core implementations include:

- **Dynamic Message Routing**: Segregates "Sent" and "Received" messages with clear visual styles and proper alignment.
- **Real-time Timestamps**: Automatically generates and displays timestamps for every message sent or received.
- **Automated Simu-Reply**: Utilizes the `setTimeout` function to provide randomized replies from a predefined data set, mimicking a real conversation flow.
- **Smart Auto-Scroll**: Ensures the conversation always focuses on the latest message by automatically scrolling the chat window to the bottom upon any update.
- **Responsive & Clean UI**: A minimalist interface designed for both desktop and mobile views, featuring smooth input focus and "Enter" key support.

## Requirements
- A modern web browser with standard HTML5 and JavaScript support.
- No external libraries or servers are required.

## Setup Instructions
1.  **Launch**: Simply open the `index.html` file in any modern web browser.
2.  **Interact**: Type your message in the bottom input field and click "Send" or press the "Enter" key.
3.  **Simulation**: Wait for approximately 1.5 seconds to receive a randomized simulated reply.

## Dependencies
- **Standard DOM API**: For all UI updates and message creation.
- **Vanilla CSS**: For the grid and card-based layout structure.
- **Native JavaScript Timer API**: (`setTimeout`) For simulating network latency.
