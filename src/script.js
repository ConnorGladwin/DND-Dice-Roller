const output = document.querySelector('.output');
const btn = document.querySelector('.btn');
let mod = document.getElementById('mod').value = 0;

// adds the "selected class to the selected button"
let diceButtons = document.getElementsByName('diceButton');
for (let i = 0; i < diceButtons.length; i++) {
    diceButtons[i].addEventListener('click', function() {
        addClass(this, i);
    });
}

function addClass(button, i) {
    diceButtons.forEach(button => button.classList.remove('selected'));
    button.classList.add('selected');
}


function handleRoll(max, min) {
    const rNum = Number.parseInt(Math.random() * (max - min) + min);

    if ((document.getElementById('mod').value) == 0) {
        mod = 0
    } else {
        mod = Number.parseInt(document.getElementById('mod').value);
    }

    console.log(rNum, mod);

    return (rNum + mod);
}

btn.addEventListener('click', () => {
    let max = selectedDice();
    output.textContent = handleRoll(max, 1);
});