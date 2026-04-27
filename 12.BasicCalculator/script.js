let display = document.getElementById("display");

function press(v) {
    display.value += v;
}

function calculate() {
    display.value = eval(display.value);
}

function clearDisplay() {
    display.value = "";
}