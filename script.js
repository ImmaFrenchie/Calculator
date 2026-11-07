var display = document.getElementById("display");

function calculate() {
  try {
    var result;
    if (display.value.includes("Math.sqrt")) {
      result = Math.sqrt(eval(display.value.replace("Math.sqrt", "")));
    }
  } catch (error) {
    display.value = "Error";
  }
}

function appendDigit(digit) {
  display.value += digit;
}
function appendDecimal() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}
