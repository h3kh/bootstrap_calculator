'use strict';
const buttonsEl = document.querySelectorAll('button');
const inputFieldEl = document.getElementById('result');
const historyEl = document.getElementById('history');

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

  // Save the expression and result to the history
  history.push({ expression, result });
  // Update the display of the history
  updateHistory();
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}

// innerHTML is a property in  is used to access the HTML content inside an element and also to modify the content.
function updateHistory() {
  // Clear the display of the history
  historyEl.innerHTML = '';

  // The forEach() method calls a function for each element in an array.
  // The document.createElement() function in  is used to create a new HTML element. It allows you to dynamically generate new HTML elements and add them to the page.
  // Add each entry from the history to the history display
  history.forEach(calculation => {
    // The createElement() method creates an element node.
    const calculationEl = document.createElement('div');
    console.log(calculationEl);
    calculationEl.textContent = `${calculation.expression} = ${calculation.result}`;

    // The appendChild() function is used to add an element as a child inside a target element (typically an HTML element).
    // Typically, before using appendChild(), you need to create a new element using createElement(). Then, using appendChild(), the new element is added as a child to the target element.
    historyEl.appendChild(calculationEl);
  });
}
