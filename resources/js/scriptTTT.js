var player = 0;

document.getElementById('table').onclick = function(event) {
        if (event.target.innerHTML != "") return;
        if (event.target.className == 'field') {
        if (player%2==0) {
            event.target.innerHTML = 'x';

            }
        else {
            event.target.innerHTML = '0';
            }
        player++; 
        checkWinner();
        }
        
} 

var fieldOne = document.getElementById('fieldOne');
var fieldTwo = document.getElementById('fieldTwo');
var fieldThree = document.getElementById('fieldThree');
var fieldFour = document.getElementById('fieldFour');
var fieldFive = document.getElementById('fieldFive');
var fieldSix = document.getElementById('fieldSix');
var fieldSeven = document.getElementById('fieldSeven');
var fieldEight = document.getElementById('fieldEight');
var fieldNine = document.getElementById('fieldNine');
var winner = document.getElementById('winner');

function checkWinner() {
   
    if (fieldOne.innerHTML=='x' && fieldTwo.innerHTML=='x' && fieldThree.innerHTML=='x') {
        winner.innerHTML = '"x" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldFour.innerHTML=='x' && fieldFive.innerHTML=='x' && fieldSix.innerHTML=='x') {
        winner.innerHTML = '"x" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldSeven.innerHTML=='x' && fieldEight.innerHTML=='x' && fieldNine.innerHTML=='x') {
        winner.innerHTML = '"x" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldOne.innerHTML=='x' && fieldFive.innerHTML=='x' && fieldNine.innerHTML=='x') {
        winner.innerHTML = '"x" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldOne.innerHTML=='x' && fieldFour.innerHTML=='x' && fieldSeven.innerHTML=='x') {
        winner.innerHTML = '"x" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldTwo.innerHTML=='x' && fieldFive.innerHTML=='x' && fieldEight.innerHTML=='x') {
        winner.innerHTML = '"x" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldThree.innerHTML=='x' && fieldSix.innerHTML=='x' && fieldNine.innerHTML=='x') {
        winner.innerHTML = '"x" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldThree.innerHTML=='x' && fieldFive.innerHTML=='x' && fieldSeven.innerHTML=='x') {
        winner.innerHTML = '"x" won';
        document.getElementById('table').style.display = 'none';
    };
    //"o" won
    if (fieldOne.innerHTML=='0' && fieldTwo.innerHTML=='0' && fieldThree.innerHTML=='0')  {
        winner.innerHTML = '"o" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldFour.innerHTML=='0' && fieldFive.innerHTML=='0' && fieldSix.innerHTML=='0')  {
        winner.innerHTML = '"o" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldSeven.innerHTML=='0' && fieldEight.innerHTML=='0' && fieldNine.innerHTML=='0')  {
        winner.innerHTML = '"o" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldOne.innerHTML=='0' && fieldFive.innerHTML=='0' && fieldNine.innerHTML=='0')  {
        winner.innerHTML = '"o" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldOne.innerHTML=='0' && fieldFour.innerHTML=='0' && fieldSeven.innerHTML=='0')  {
        winner.innerHTML = '"o" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldTwo.innerHTML=='0' && fieldFive.innerHTML=='0' && fieldEight.innerHTML=='0')  {
        winner.innerHTML = '"o" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldThree.innerHTML=='0' && fieldSix.innerHTML=='0' && fieldNine.innerHTML=='0')  {
        winner.innerHTML = '"o" won';
        document.getElementById('table').style.display = 'none';
    };
    if (fieldThree.innerHTML=='0' && fieldFive.innerHTML=='0' && fieldSeven.innerHTML=='0')  {
        winner.innerHTML = '"o" won';
        document.getElementById('table').style.display = 'none';
    }
    }


document.getElementById('newGame').addEventListener('click', function() {
    location.reload();
});









 