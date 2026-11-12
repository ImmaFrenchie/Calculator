var display = document.getElementById("display");

function calculate() {
  try {
    var expr = display.value;
    if (expr.includes("math.sqrt") && !expr.endswith(")")) {
      expr += ")";
    }
    var result = eval(expr);
    display.value = Number.isFinite(result) ? result : "Error";
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
function appendOperator(operator) {
  display.value += operator;
}

function clearDisplay() {
  display.value = "";
}
