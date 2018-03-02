/*
function raiseAlarm() {
    alert('I show myself every two seconds.')
}

var interval = setInterval(raiseAlarm, 2000);

function stop() {
    alert('It took 10 seconds. The following statement interrupts the interval.');
    clearInterval(interval);
}

setTimeout(stop, 10000);

console.log(window.document);
console.log(location);
var navigation = document.getElementById('nav');
console.log(navigation);
var withMenuItemsClass = document.getElementsByClassName('menuItem');
console.log(withMenuItemsClass);
var newElem = document.createElement('p');
newElem.innerHTML = 'The text inside the p tag, which is under newElem';
console.log(newElem);

//window.location = 'http://www.kodilla.pl';

*/

var getButtons = document.getElementsByClassName('button');
var numberOfButtons = getButtons.length;
for (var i = 1; i <= numberOfButtons; i++) {
	alert(getButtons[i].innerText);
}