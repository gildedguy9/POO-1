let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        if (value === 'C') {
            buffer = '0';
            runningTotal = 0;
            previousOperator = null;
        } else if (value === '=') {
            if (previousOperator !== null) {
                performOperation(parseInt(buffer));
                previousOperator = null;
                buffer = runningTotal;
                runningTotal = 0;
            }
        } else if (value === '←') {
            buffer = buffer.length === 1 ? '0' : buffer.slice(0, -1);
        } else {
            handleOperator(value);
        }
    } else {
        
        buffer = buffer === "0" ? value : buffer + value;
    }
    screen.innerText = buffer;
}

function handleOperator(operator) {
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        performOperation(intBuffer);
    }
    previousOperator = operator;
    buffer = "0";
}

function performOperation(intBuffer) {
    switch (previousOperator) {
        case '+':
            runningTotal += intBuffer;
            break;
        case '−':
            runningTotal -= intBuffer;
            break;
        case '×':
            runningTotal *= intBuffer;
            break;
        case '÷':
            runningTotal /= intBuffer;
            break;
    }
}

function init() {
    document.querySelector('.calc-buttons').onclick = (event) => buttonClick(event.target.innerText);
}

init();