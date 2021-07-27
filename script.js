// Mathematical Operators
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
  document.calculator.display.value = Math.SQRT2(
    document.calculator.display.value
  );
}

function cubed() {
  document.calculator.display.value = Math.pow(
    document.calculator.display.value,
    3
  );
}

function squareRoot() {
  document.calculator.display.value = Math.pow(
    document.calculator.display.value,
    1 / 2
  );
}

function cubeRoot() {
  document.calculator.display.value = Math.pow(
    document.calculator.display.value,
    1 / 3
  );
}

function log() {
  document.calculator.display.value = Math.LN10(
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

function number(value) {
  document.calculator.display.value += value;
}
