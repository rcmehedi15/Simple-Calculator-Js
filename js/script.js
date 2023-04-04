// Declare and initialize variables
let currentVal = '';
let firstVal = '';
let operator = '';
let result = document.getElementById('result');

// Function that is called when a button is clicked
function buttonClicked(value) {
  // If the clicked button is an operator (+, -, *, or /), store it and the first value
  if (value === '/' || value === '*' || value === '-' || value === '+') {
    operator = value;
    firstVal = currentVal;
    currentVal = '';
  } else { // If the clicked button is a number or decimal, add it to the current value
    currentVal += value;
  }
  // Update the result element with the current value
  result.value = currentVal;
}

// Function that is called when the equals button is clicked
function equalsClicked() {
  // Store the current value as the second value
  let secondVal = currentVal;
  let total = 0;
  // Perform the appropriate operation based on the operator
  switch (operator) {
    case '/':
      total = parseFloat(firstVal) / parseFloat(secondVal);
      break;
    case '*':
      total = parseFloat(firstVal) * parseFloat(secondVal);
      break;
    case '-':
      total = parseFloat(firstVal) - parseFloat(secondVal);
      break;
    case '+':
      total = parseFloat(firstVal) + parseFloat(secondVal);
      break;
    default:
      break;
  }
  // If the total is a valid number, update the result element with it and store it as the current value
  if (!isNaN(total) && total !== undefined) {
    result.value = total;
    currentVal = total.toString();
  } else { // Otherwise, update the result element with an error message
    result.value = 'Error';
  }
}

// Function that is called when the clear button is clicked
function clearClicked() {
  // Reset all variables and update the result element with an empty string
  currentVal = '';
  firstVal = '';
  operator = '';
  result.value = '';
}
