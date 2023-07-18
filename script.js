'use strict';
// select elment
const buttonsEl = document.querySelectorAll('button');
const inputFieldEl = document.getElementById('result');
const historyEl = document.getElementById('history');
const deleteBtn = document.querySelector('.delete');

// An array to store the history of calculations
const history = [];

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
    result = Math.pow(parseFloat(operands[0]), parseFloat(operands[1]));
  }

  inputFieldEl.value = result;

  // Save the expression and result to the history
  history.push({ expression, result });

  // Update the display of the history
  updateHistory();
}

function appendValue(buttonValue) {
  const trimmedValue = buttonValue.trim();
  inputFieldEl.value += trimmedValue;
}

function updateHistory() {
  // Clear the display of the history
  historyEl.textContent = '';

  // Add each entry from the history to the history display
  history.forEach(calculation => {
    const calculationEl = document.createElement('div');

    // condition
    if (history.length <= 3) {
      calculationEl.textContent = `${calculation.expression} = ${calculation.result}`;

      historyEl.appendChild(calculationEl);
      historyEl.classList.add('inputStyle');
    } else {
      historyEl.textContent = 'There is no further history';
    }
  });
}

deleteBtn.addEventListener('click', clearHistory);

function clearHistory() {
  history.length = 0;
  updateHistory();
  historyEl.classList.remove('inputStyle');
}
