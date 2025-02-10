function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : "Error";
}

let num1 = 8;
let operator = '+';
let num2 = 5;

let result;
switch (operator) {
    case '+':
        result = add(num1, num2);
        break;
    case '-':
        result = subtract(num1, num2);
        break;
    case '*':
        result = multiply(num1, num2);
        break;
    case '/':
        result = divide(num1, num2);
        break;
    default:
        result = "Error: Invalid operator.";
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 !== 0 ? num1 / num2 : "Error"; /* Prevent division by zero */
        default: return "Error";
    }
}

console.log(`${num1} ${operator} ${num2} = ${result}`);