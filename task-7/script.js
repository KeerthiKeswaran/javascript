const chatWindow = document.getElementById('chatWindow');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

const responses = [
    "Hello! How can I help you today?",
    "That's interesting, tell me more!",
    "I'm just a simulation, but I'm here for you.",
    "Processing your request... (just kidding!)",
    "Have a great day!",
    "Message received! Anything else?"
];

function addMessage(text, type) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    message.innerHTML = `<span>${text}</span><span class="timestamp">${timestamp}</span>`;
    
    chatWindow.appendChild(message);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function handleSent() {
    const text = userInput.value.trim();
    if (text) {
        addMessage(text, 'sent');
        userInput.value = '';
        
        // Simulating delay for incoming message
        setTimeout(() => {
            const reply = responses[Math.floor(Math.random() * responses.length)];
            addMessage(reply, 'received');
        }, 1500);
    }
}

sendBtn.addEventListener('click', handleSent);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSent();
});

// Initial welcome message
setTimeout(() => {
    addMessage("Hi! I'm your chat simulation. Send me a message!", 'received');
}, 500);
