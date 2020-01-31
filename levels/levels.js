import { levelsData } from '../data/level-data.js';
import { renderLevel } from './render-level.js';
import { renderUserState } from '../common/render-user-state.js';
import { findById } from '../common/find-by-id.js';
import { getUser, saveUser } from '../common/utils.js';

// get elements from DOM
const choiceForm = document.getElementById('level-choice-form');

// create a copy of the metadata
const levels = levelsData.slice();

// get user from localstorage and render on screen
const user = getUser();
renderUserState(user);

// get id search param and use to render level content from metadata
const searchParams = new URLSearchParams(window.location.search);
const levelId = searchParams.get('id');
const level = findById(levels, levelId);
renderLevel(level);

choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const choiceData = new FormData(choiceForm);
    const choiceId = choiceData.get('choice');
    
    const choiceObject = findById(level.choices, choiceId);
    
    const choicePoints = choiceObject.points;
    
    user.points += choicePoints;
    user.completedLevels.push(levelId);
    saveUser(user);

    window.location = '../map/index.html';

});

