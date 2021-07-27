// Mathematical Operators
function number(value) {
  document.calculator.display.value += value;
}

function sin() {
  document.calculator.display.value = Math.sin(
    document.calculator.display.value
  );
}

function cos() {
  document.calculator.display.value = Math.cos(
    document.calculator.display.value
  );
}

function tan() {
  document.calculator.display.value = Math.tan(
    document.calculator.display.value
  );
}

function squared() {
  document.calculator.display.value = Math.pow(
    document.calculator.display.value,
    2
  );
}

function cubed() {
  document.calculator.display.value = Math.pow(
    document.calculator.display.value,
    3
  );
}

function squareRoot() {
  document.calculator.display.value = Math.sqrt(
    document.calculator.display.value
  );
}

function cubeRoot() {
  document.calculator.display.value = Math.cbrt(
    document.calculator.display.value
  );
}

function log(value) {
  document.calculator.display.value = Math.log10(
    document.calculator.display.value
  );
}

// Other keys
function ln() {
  document.calculator.display.value = Math.log(
    document.calculator.display.value
  );
}

function erase(value) {
  document.calculator.display.value = "";
}

function undo() {
  document.calculator.display.value = "";
}

function backspace() {
  document.calculator.display.value = document.calculator.display.value.substr(
    0,
    document.calculator.display.value.length - 1
  );
}

function equal() {
  document.calculator.display.value = eval(document.calculator.display.value);
}
