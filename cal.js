function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  var currentDisplay = document.getElementById('display').value;
  document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculate() {
  try {
      var result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}