import { renderPrizes } from './render-prizes.js';
import { renderPenalty } from './render-penalty.js';

export function determineResultToShow(user, prizes, penalties) {// render game result based on ending points total
    if (user.points > 0) {
        renderPrizes(prizes);
    }
    else if (user.points <= 0) {
        renderPenalty(penalties, user);
    }
}