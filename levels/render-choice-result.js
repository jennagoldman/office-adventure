const mainSection = document.querySelector('main');
const levelDescription = document.getElementById('level-description');
const choicesForm = document.getElementById('level-choice-form');

export function renderChoiceResult(choice) {
    // hide level description and choice form (radio buttons and submit)
    levelDescription.classList.add('hidden');
    choicesForm.classList.add('hidden');

    // DISPLAY RESULT
    // create p tag
    const resultPTag = document.createElement('p');

    // populate text content with choice.result
    resultPTag.textContent = choice.result;
    resultPTag.id = 'result-text';

    // add to page
    mainSection.appendChild(resultPTag);

    // add link and button to go back to map
    const goToMapLink = document.createElement('a');
    goToMapLink.href = '../map/index.html';
    mainSection.appendChild(goToMapLink);

    const goToMapButton = document.createElement('button');
    goToMapButton.textContent = 'Return to map';
    goToMapLink.appendChild(goToMapButton);
}   