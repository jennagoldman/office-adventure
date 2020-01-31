const penaltyContainer = document.getElementById('penalty-container');
const prizesContainer = document.getElementById('prizes-container');

export function renderPenalty(penalties, user) {
    prizesContainer.classList.add('hidden');
    const penaltyPTag = document.createElement('p');
    const penaltyImg = document.createElement('img');

    let penalty;
    
    // conditional display
    if (user.points === 0) {
        penalty = penalties[0];
        penaltyPTag.textContent = penalty.name;
    } else if (user.points < 0) {
        penalty = penalties[1];
        penaltyImg.src = penalty.image;
        penaltyPTag.textContent = penalty.name;
    }

    penaltyContainer.append(penaltyImg, penaltyPTag);
}