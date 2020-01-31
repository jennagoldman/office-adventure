const mainSection = document.querySelector('main');

export function addResetButton() {
    // create reset link
    const resetLink = document.createElement('a');
    resetLink.href = '../home/index.html';

    // create reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Play again';

    // append button to link and link to main section of page
    resetLink.appendChild(resetButton);
    mainSection.appendChild(resetLink);
}