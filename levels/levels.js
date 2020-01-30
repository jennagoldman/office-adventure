import { levelsData } from '../data/level-data.js';
import { renderLevel } from './render-level.js';
import { renderUserState } from '../common/render-user-state.js';
import { findById } from '../common/find-by-id.js';

const levels = levelsData.slice();

const stringyUser = localStorage.getItem('user');
const user = JSON.parse(stringyUser);

renderUserState(user);

const searchParams = new URLSearchParams(window.location.search);
const levelId = searchParams.get('id');

const level = findById(levels, levelId);

renderLevel(level);

