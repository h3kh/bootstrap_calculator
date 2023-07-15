'use strict';
const buttonsEl = document.querySelectorAll('button');

const inputFieldEl = document.getElementById('result');

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener('click', () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === 'C') {
      clearResult();
    } else if (buttonValue === '=') {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = '';
}

function calculateResult() {
  const expression = inputFieldEl.value;
  let result;

  if (expression.includes('+')) {
    const operands = expression.split('+');
    // The parseFloat() function is used to parse a string and convert it to a floating-point number.
    result = parseFloat(operands[0]) + parseFloat(operands[1]);
  } else if (expression.includes('-')) {
    const operands = expression.split('-');
    result = parseFloat(operands[0]) - parseFloat(operands[1]);
  } else if (expression.includes('*')) {
    const operands = expression.split('*');
    result = parseFloat(operands[0]) * parseFloat(operands[1]);
  } else if (expression.includes('/')) {
    const operands = expression.split('/');
    result = parseFloat(operands[0]) / parseFloat(operands[1]);
  } else if (expression.includes('^')) {
    const operands = expression.split('^');
    // The Math.pow() function is used to calculate the power of a number to another specified power.
    // In this line, raises operands[0] to the power of operands[1]
    result = Math.pow(parseFloat(operands[0]), parseFloat(operands[1]));
  }

  inputFieldEl.value = result;
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
