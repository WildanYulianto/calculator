var lastOperation = "";

function setLastOperation(operation) {
    lastOperation = operation;
}

function display(value) {
    var result = document.getElementById("result");
    result.value += value;
}

function ClearScreen() {
    var result = document.getElementById("result");
    result.value = "";
    lastOperation ="";
}

function calculate() {
    var result = document.getElementById("result");
    var p = result.value.trim();
    if (p !== "") {
        var q = eval(p);
        if (!isNaN(q)) {
            result.value = q;
        } else {
            alert("Invalid input.");
        }
    } else {
        alert("please enter a valid expression.");
    }
}

function deleteLastCharacter() {
    var result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function trig(func) {
    setLastOperation(func);
    var result = document.getElementById('result');
    result.value = Math[func](parseFloat(result.value));
}

function power() {
    setLastOperation("^");
    var result = document.getElementById('result');
    result.value = Math.pow(parseFloat(result.value), 2);
}

function sqrt() {
    setLastOperation("sqrt");
    var result = document.getElementById('result');
    result.value = Math.sqrt(parseFloat(result.value));
}

function log() {
    setLastOperation("log");
    var result = document.getElementById('result');
    result.value = Math.log10(parseFloat(result.value));
}

function ln() {
    setLastOperation("ln");
    var result = document.getElementById('result');
    result.value = Math.log(parseFloat(result.value));
}

function quitApplication() {
    //close the window or redirect to another page, depending on the requirement
    window.close();
}
