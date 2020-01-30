import { levelsData } from '../data/level-data.js';
import { createLevelsLinks } from './create-level-links.js';
import { renderUserState } from '../common/render-user-state.js';

const levels = levelsData.slice();

createLevelsLinks(levels);

const stringyUser = localStorage.getItem('user');
const user = JSON.parse(stringyUser);

renderUserState(user);