import { getUser } from '../common/utils.js';
import { prizeData } from '../data/prizes-data.js';
import { penaltiesData } from '../data/penalties-data.js';
import { addResetButton } from './add-reset-button.js';
import { determineResultToShow } from './determine-result-to-show.js';

// get user from local storage and prize/penalty data
export const user = getUser();
export const prizes = prizeData.slice();
export const penalties = penaltiesData.slice();

determineResultToShow(user, prizes, penalties);

addResetButton();
