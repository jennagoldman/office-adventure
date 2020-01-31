import { getUser } from '../common/utils.js';
import { prizeData } from '../data/prizes-data.js';
import { renderPrizes } from './render-prizes.js';
import { penaltiesData } from '../data/penalties-data.js';
import { renderPenalty } from './render-penalty.js';

// get user from local storage and prize/penalty data
const user = getUser();
const prizes = prizeData.slice();
const penalties = penaltiesData.slice();

// get elements from DOM
const mainSection = document.querySelector('main');

// if schrute bucks > 0, show prize selection, if <= 0 show appropriate penalty
if (user.points > 0) {
    renderPrizes(prizes);
} else if (user.points <= 0) {
    renderPenalty(penalties, user);
}

const resetLink = document.createElement('a');
const resetButton = document.createElement('button');

resetLink.href = '../home/index.html';
resetButton.textContent = 'Play again';

resetLink.appendChild(resetButton);
mainSection.appendChild(resetLink);
