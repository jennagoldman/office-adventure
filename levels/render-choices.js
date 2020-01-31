const choicesForm = document.getElementById('level-choice-form');

export function renderLevelChoices(level) {
    level.choices.forEach(choice => {
        const choiceLabel = document.createElement('label');
        choiceLabel.id = `${choice.id}-label`;
        choiceLabel.setAttribute('for', choice.id);
        const choiceInput = document.createElement('input');
        choiceInput.type = 'radio';
        choiceInput.name = 'choice';
        choiceInput.id = `${choice.id}-radio`;
        choiceInput.value = choice.id;
        choiceLabel.appendChild(choiceInput);
        const choiceDescription = document.createElement('span');
        choiceDescription.textContent = choice.description;
        choiceLabel.appendChild(choiceDescription);
        choicesForm.insertAdjacentElement('afterBegin', choiceLabel);
    });
}