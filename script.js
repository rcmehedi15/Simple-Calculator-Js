let currentVal = '';
let firstVal = '';
let operator = '';
let result = document.getElementById('result');

function buttonClicked(value) {
  if (value === '/' || value === '*' || value === '-' || value === '+') {
    operator = value;
    firstVal = currentVal;
    currentVal = '';
  } else {
    currentVal += value;
  }
  result.value = currentVal;
}

function equalsClicked() {
  let secondVal = currentVal;
  let total = 0;
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
  if (!isNaN(total) && total !== undefined) {
    result.value = total;
    currentVal = total.toString();
  } else {
    result.value = 'Error';
  }
}

function clearClicked() {
  currentVal = '';
  firstVal = '';
  operator = '';
  result.value = '';
}
