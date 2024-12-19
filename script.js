function add(a, b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

function subtract(a, b) {
    a = Number(a);
    b = Number(b);
    return a - b;
}

function multiply(a, b) {
    a = Number(a);
    b = Number(b);
    return a * b;
}

function divide(a, b) {
    a = Number(a);
    b = Number(b);
    if (b === 0) {
        return "ERROR";
    }
    return a / b;
}

function clearAll() {
    display.textContent = "";
    displayNumber = "";
    previousNumber = "";
    operator = '';
}

function changeDisplay() {
    display.textContent = displayNumber;
}

function operateDisplay(a, b, operator) {
    if (previousNumber === ""
    || displayNumber === ""
    || currentOperator === "") {
        return;
    }

    if (operator === '+') {
        displayNumber = add(a, b);
        changeDisplay();
    }
    if (operator === '-') {
        displayNumber = subtract(a, b);
        changeDisplay();
    } 
    if (operator === '*') {
        displayNumber = multiply(a, b);
        changeDisplay();
    } 
    if (operator === '/') {
        displayNumber = divide(a, b);
        changeDisplay();
        if (displayNumber === "ERROR") {
            displayNumber = "";
        }
    }
}

let displayNumber = "";
let previousNumber = "";
let currentOperator= '';

const display = document.querySelector(".display");

for (let i = 0; i < 10; i++) {
    const numberButton = document.querySelector(`.button${i}`);
    numberButton.addEventListener("click", () => {
        displayNumber += `${i}`;
        changeDisplay(`${i}`);
    });
}

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => clearAll());

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => 
    operateDisplay(previousNumber, displayNumber, currentOperator));

const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
    operateDisplay(previousNumber, displayNumber, currentOperator);
    previousNumber = displayNumber;
    displayNumber = "";
    currentOperator = '+';
});

const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener("click", () => {
    operateDisplay(previousNumber, displayNumber, currentOperator);
    previousNumber = displayNumber;
    displayNumber = "";
    currentOperator = '-';
});

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", () => {
    operateDisplay(previousNumber, displayNumber, currentOperator);
    previousNumber = displayNumber;
    displayNumber = "";
    currentOperator = '*';
});

const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", () => {
    operateDisplay(previousNumber, displayNumber, currentOperator);
    previousNumber = displayNumber;
    displayNumber = "";
    currentOperator = '/';
});