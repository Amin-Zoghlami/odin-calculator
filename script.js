function add(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 + num2;
}

function subtract(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 - num2;
}

function multiply(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 * num2;
}

function divide(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (num2 === 0) {
        return "ERROR";
    }
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    }
    if (operator === '-') {
        return subtract(num1, num2);
    } 
    if (operator === '*') {
        return multiply(num1, num2);
    } 
    if (operator === '/') {
        return divide(num1, num2);
    }
}

console.log(operate(1, 3, '/'));
let num1 = "";
let num2 = "";
let operator= '';