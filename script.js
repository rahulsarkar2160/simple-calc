let display = '';
let final = '';


const printEqualsDisplay = () => {
    final = eval(display)
    document.getElementById("result").innerHTML = final;
    display = '';
}

const deleteFunction = () => {
    display = display.slice(0, -1);
    document.getElementById("display").innerHTML = display;

}

const resetFunction = () => {
    display = '';
    final = '';

    document.getElementById("display").innerHTML = '';
    document.getElementById("result").innerHTML = '';
}


const appendNumber = document.addEventListener("click", function (event) {

    let tryNumber = event.target.innerHTML;
    let numberID = '';


    function isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    if (isNumeric(tryNumber)) numberID = tryNumber;
    display = display + numberID;

    document.getElementById("display").innerHTML = display;
    console.log(display)

});


const appendOperator = document.addEventListener("click", function (event) {
    const operatorSet = new Set(
        ['+', '-', '*', '/']
    );

    let tryOperator = event.target.innerHTML;
    let operatorID = '';

    if (operatorSet.has(tryOperator)) operatorID = tryOperator;

    let lastDisplayCharactor = display.charAt(display.length - 1)

    // if ((lastDisplayCharactor == operatorID)) {
    // }

    function isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    if (isNumeric(lastDisplayCharactor)) {
        display = display + operatorID
    }

    if (operatorSet.has(lastDisplayCharactor) && operatorID !== lastDisplayCharactor) {
        display = display.slice(0, -1);
        display = display + operatorID;
    }
    document.getElementById("display").innerHTML = display;

});


const deleteLast = document.getElementById("delete").addEventListener("click", deleteFunction);
const reset = document.getElementById("reset").addEventListener("click", resetFunction);
const equal = document.getElementById("equals").addEventListener("click", printEqualsDisplay);