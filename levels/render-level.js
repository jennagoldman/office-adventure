const levelTitle = document.getElementById('level-title');
const levelImg = document.getElementById('level-image');
const levelDescription = document.getElementById('level-description');
const choicesForm = document.getElementById('level-choice-form');


export function renderLevel(level) {
    levelTitle.textContent = level.name;
    levelImg.src = level.image;
    levelDescription.textContent = level.description;

    // syntax for rendering level choices will go here

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

        // choicesForm.insertAdjacentElement('afterbegin', choiceInput);
        
    });
}