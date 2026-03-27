// Import the custom calculation engine
import { CalculatorEngine } from './CalculatorEngine.js';

const engine = new CalculatorEngine();
const display = document.getElementById('display');
const buttonGrid = document.getElementById('button-grid');

let currentExpression = '0';
let isResultDisplayed = false;

/**
 * Updates the display with the current text
 */
function updateUI() {
    display.textContent = currentExpression;
}

/**
 * Core event listener for all calculator buttons using Delegation
 */
buttonGrid.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.matches('button')) return;

    const { type, value } = target.dataset;

    // Handle number clicks
    if (type === 'number') {
        if (isResultDisplayed) {
            currentExpression = value === '.' ? '0.' : value;
            isResultDisplayed = false;
        } else {
            // Check for duplicate decimal in current number segment
            if (value === '.') {
                const parts = currentExpression.split(/[\+\-\*\/]/);
                if (parts[parts.length - 1].includes('.')) return;
            }

            currentExpression = currentExpression === '0' && value !== '.' ? value : currentExpression + value;
        }
    }

    // Handle operator clicks
    if (type === 'operator') {
        const lastChar = currentExpression.slice(-1);
        const operators = ['+', '-', '*', '/'];

        if (isResultDisplayed) isResultDisplayed = false;

        // Swap the last operator if a new one is selected
        if (operators.includes(lastChar)) {
            currentExpression = currentExpression.slice(0, -1) + value;
        } else {
            currentExpression += value;
        }
    }

    // Handle clear, delete, and equal actions
    if (type === 'clear') {
        currentExpression = '0';
        isResultDisplayed = false;
    }

    if (type === 'delete') {
        currentExpression = currentExpression.length > 1 ? currentExpression.slice(0, -1) : '0';
    }

    if (type === 'calculate') {
        const rawResult = engine.evaluate(currentExpression);
        
        // Final formatting of the results
        if (typeof rawResult === 'number' && Number.isFinite(rawResult)) {
            currentExpression = Number.isInteger(rawResult) ? rawResult.toString() : parseFloat(rawResult.toFixed(10)).toString();
        } else {
            currentExpression = 'Error';
        }
        isResultDisplayed = true;
    }

    updateUI();
});
