import { renderLevelChoices } from './render-choices.js';

const levelTitle = document.getElementById('level-title');
const levelImg = document.getElementById('level-image');
const levelDescription = document.getElementById('level-description');


export function renderLevel(level) {
    levelTitle.textContent = level.name;
    levelImg.src = level.image;
    levelDescription.textContent = level.description;

    // syntax for rendering level choices will go here

    renderLevelChoices(level);
}


