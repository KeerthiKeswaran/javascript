let currentExpression = '0';
let isResultDisplayed = false;

// Sync display content with current string expression
function updateDisplay() {
    document.getElementById('display').textContent = currentExpression;
}

// Add a number or dot to the current input
function appendNumber(value) {
    if (isResultDisplayed) {
        currentExpression = value === '.' ? '0.' : value;
        isResultDisplayed = false;
    } else {
        // Prevent double decimals in one number
        if (value === '.') {
            const parts = currentExpression.split(/[\+\-\*\/]/);
            if (parts[parts.length - 1].includes('.')) return;
        }

        currentExpression = currentExpression === '0' && value !== '.' ? value : currentExpression + value;
    }
    updateDisplay();
}

// Handle mathematical operators (+, -, *, /)
function appendOperator(op) {
    const lastChar = currentExpression.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (isResultDisplayed) isResultDisplayed = false;

    // Replace the operator if another is pressed consecutively
    if (operators.includes(lastChar)) {
        currentExpression = currentExpression.slice(0, -1) + op;
    } else {
        currentExpression += op;
    }
    updateDisplay();
}

// Reset calculator state
function clearDisplay() {
    currentExpression = '0';
    isResultDisplayed = false;
    updateDisplay();
}

// Remove last typed character
function deleteLast() {
    currentExpression = currentExpression.length > 1 ? currentExpression.slice(0, -1) : '0';
    updateDisplay();
}

// Evaluate string expression and format result
function calculate() {
    try {
        // Evaluate math expression from string
        const result = new Function(`return ${currentExpression}`)();
        
        // Handle floating point errors and edge cases
        if (Number.isFinite(result)) {
            currentExpression = Number.isInteger(result) ? result.toString() : parseFloat(result.toFixed(10)).toString();
        } else {
            currentExpression = 'Error';
        }
        isResultDisplayed = true;
    } catch {
        currentExpression = 'Error';
        isResultDisplayed = true;
    }
    updateDisplay();
}


