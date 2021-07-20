//Vnture Animation
const logo = document.querySelectorAll('#logo path');

for (let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}

//Typing Animation
const texts = ['Alex Grills', 'Vnture'];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";


(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.legth) {
        count++;
        index = 0;
    }
    setTimeout(type, 400);
}())
