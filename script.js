let displayValue = '0';
const maxDigits = 10; // Maksimum digit yang ditampilkan

function updateDisplay() {
  const displayElement = document.getElementById('display');
  if (displayValue.length > maxDigits) {
    displayElement.innerText = displayValue.slice(0, maxDigits); // Batas panjang tampilan
  } else {
    displayElement.innerText = displayValue;
  }
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === '') displayValue = '0';
  updateDisplay();
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else if (displayValue.length < maxDigits) {
    displayValue += number; // Batasi jumlah karakter yang bisa dimasukkan
  }
  updateDisplay();
}

function appendOperator(operator) {
  const lastChar = displayValue[displayValue.length - 1];
  if (['+', '-', '*', '/', '%'].includes(lastChar)) {
    displayValue = displayValue.slice(0, -1); // Ganti operator terakhir
  }
  displayValue += operator;
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue.replace('÷', '/').replace('×', '*')).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}
