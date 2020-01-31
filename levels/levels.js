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
    
    //get the form data
    const choiceData = new FormData(choiceForm);
    const choiceId = choiceData.get('choice');
    
    // locate the chosen choice object, and update user's points
    const choiceObject = findById(level.choices, choiceId);
    const choicePoints = choiceObject.points;
    user.points += choicePoints;

    // push current level to completed levels array
    user.completedLevels.push(levelId);

    // save the updated user state
    saveUser(user);

    // display choice result
    renderChoiceResult(choiceObject);

    // display updated user state
    getUser();
    renderUserState(user);
});

