import { levelsData } from '../data/level-data.js';
import { renderLevel } from './render-level.js';
import { renderChoiceResult } from './render-choice-result.js';
import { renderUserState } from '../common/render-user-state.js';
import { getUser, saveUser, findById } from '../common/utils.js';

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

// submit choice and update user state
choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const choiceData = new FormData(choiceForm);
    const choiceId = choiceData.get('choice');
    
    const choiceObject = findById(level.choices, choiceId);
    
    const choicePoints = choiceObject.points;
    
    user.points += choicePoints;
    user.completedLevels.push(levelId);
    saveUser(user);

    // display choice result
    renderChoiceResult(choiceObject);
});

