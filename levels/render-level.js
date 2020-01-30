const levelTitle = document.getElementById('level-title');
const levelImg = document.getElementById('level-image');
const levelDescription = document.getElementById('level-description');

const choice1Label = document.getElementById('choice1-label');
const choice1Radio = document.getElementById('choice1-radio');

const choice2Label = document.getElementById('choice2-label');
const choice2Radio = document.getElementById('choice2-radio');

const choice3Label = document.getElementById('choice3-label');
const choice3Radio = document.getElementById('choice3-radio');


export function renderLevel(level) {
    levelTitle.textContent = level.name;
    levelImg.src = level.image;
    levelDescription.textContent = level.description;

    // syntax for rendering level choices will go here
}