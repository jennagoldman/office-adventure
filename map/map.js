

import { getUser } from '../common/utils.js';
import { renderUserState } from '../common/render-user-state.js';
import { levelsData } from '../data/level-data.js';
import { createLevelsLinks } from './create-level-links.js';
import { detectGameEndCondition } from './detect-end-condition.js';

// get the user and display updated state
const user = getUser();
renderUserState(user);

// get a copy of the metadata and render level links
const levels = levelsData.slice();
createLevelsLinks(levels);

// redirect to results page when all levels completed
detectGameEndCondition(user, levels);

