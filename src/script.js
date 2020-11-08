const output = document.querySelector('.output');
const rollBtn = document.querySelector('.rollBtn');
let mod = document.getElementById('mod').value;

// adds event listeners to each of the dice buttons
let diceButtons = document.getElementsByName('diceButton');
for (let i = 0; i < diceButtons.length; i++) {
    // runs addClass function on the selected button
    diceButtons[i].addEventListener('click', function () {
        addClass(this, i);
    });
}

// adds the "selected" class to the selected button
function addClass(button, i) {
    diceButtons.forEach(button => button.classList.remove('selected'));
    button.classList.add('selected');
}

// passes the selected dice to the roll function
function selectedDice(diceButtons) {
    for (let i = 0; i < diceButtons.length; i++) {
        // returns the value of the selected dice
        if (diceButtons[i].classList.contains('selected')) {
            return diceButtons[i].value;
        }
    }
}

// takes in the selected dice value and returns a random number
function handleRoll(max, min) {

    // determines what modifier is added to the roll
    if ((document.getElementById('mod').value) == '') {
        mod = 0
    } else {
        mod = Number.parseInt(document.getElementById('mod').value);
    }

    return (Number.parseInt(Math.random() * (max - min) + min) + mod);
}

rollBtn.addEventListener('click', () => {
    output.textContent = handleRoll(selectedDice(diceButtons), 1);
});