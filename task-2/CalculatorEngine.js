export class CalculatorEngine {
    /**
     * Evaluates a mathematical expression string.
     * Supports basic operators: +, -, *, /
     * @param {string} expression - The math expression to solve
     * @returns {number | string} - The calculated result or 'Error'
     */
    evaluate(expression) {
        try {
            // Tokenize the expression into numbers and operators
            // The regex matches numbers (including decimals) or the operators +, -, *, /
            const tokens = expression.match(/(\d+\.?\d*)|([\+\-\*\/])/g);

            if (!tokens) return 0;

            // Step 1: Handle Multiplication and Division first (Higher Precedence)
            const processedTokens = [];
            for (let i = 0; i < tokens.length; i++) {
                const token = tokens[i];
                if (token === '*' || token === '/') {
                    const prevValue = parseFloat(processedTokens.pop());
                    const nextValue = parseFloat(tokens[++i]);

                    if (token === '*') {
                        processedTokens.push(prevValue * nextValue);
                    } else {
                        if (nextValue === 0) throw new Error("DivisionByZero");
                        processedTokens.push(prevValue / nextValue);
                    }
                } else {
                    processedTokens.push(token);
                }
            }

            // Step 2: Handle Addition and Subtraction (Lower Precedence)
            let result = parseFloat(processedTokens[0]);
            for (let i = 1; i < processedTokens.length; i += 2) {
                const operator = processedTokens[i];
                const nextValue = parseFloat(processedTokens[i + 1]);

                if (operator === '+') {
                    result += nextValue;
                } else if (operator === '-') {
                    result -= nextValue;
                }
            }

            return result;
        } catch (error) {
            return 'Error';
        }
    }
}
