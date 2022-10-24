var name = "hello";
var num = 1;

var getName = function() {
    return "Hello";
}



function doSomething() {
    var userInputDom = document.getElementById('userInput');
    var userValue = userInputDom.value;
    var outputDom = document.getElementById('data');
    outputDom.innerText = "Hello " + userValue;
}

var buttonDom = document.getElementById('userButton');
buttonDom.addEventListener('click',doSomething);

var result = getName();
console.log(result);