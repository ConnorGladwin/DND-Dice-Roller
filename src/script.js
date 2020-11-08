const output = document.querySelector('.output');
const rollBtn = document.querySelector('.rollBtn');
let mod = document.getElementById('mod').value = 0;

let diceButtons = document.getElementsByName('diceButton');
for (let i = 0; i < diceButtons.length; i++) {
    diceButtons[i].addEventListener('click', function () {
        addClass(this, i);
    });
}

// adds the "selected" class to the selected button
function addClass(button, i) {
    diceButtons.forEach(button => button.classList.remove('selected'));
    button.classList.add('selected');
}

function lowLight(button) {
    
}

// passes the selected dice to the roll function
function selectedDice(diceButtons) {
    for (let i = 0; i < diceButtons.length; i++) {
        if (diceButtons[i].classList.contains('selected')) {
            return diceButtons[i].value;
        }
    }
}

// takes in the selected dice value and returns a random number
function handleRoll(max, min) {

    // determines what modifier is added to the roll
    if ((document.getElementById('mod').value) == 0) {
        mod = 0
    } else {
        mod = Number.parseInt(document.getElementById('mod').value);
    }

    // console.log(rNum, mod);

    return (Number.parseInt(Math.random() * (max - min) + min) + mod);
}

rollBtn.addEventListener('click', () => {
    output.textContent = handleRoll(selectedDice(diceButtons), 1);
});