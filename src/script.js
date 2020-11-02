const output = document.querySelector('.output');
const btn = document.querySelector('.btn');
const diceButton = Array.from(document.querySelectorAll('[name="diceButton"]'));
let mod = document.getElementById('mod').value = 0;

function selectedDice() {
    return diceButton.find(dice => dice.checked).value;
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