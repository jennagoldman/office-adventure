import { levelsData } from '../data/level-data.js';
import { createLevelsLinks } from './create-level-links.js';
import { renderUserState } from '../common/render-user-state.js';
import { getUser } from '../common/utils.js';

const user = getUser();
renderUserState(user);

const levels = levelsData.slice();
createLevelsLinks(levels);

