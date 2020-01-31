const prizesContainer = document.getElementById('prizes-container');
const prizesH3 = document.createElement('h3');

prizesContainer.appendChild(prizesH3);

export function renderPrizes(prizeData) {
    prizeData.forEach(prize => {
        const prizeDiv = document.createElement('div');
        prizeDiv.classList.add('prize-div');

        const prizeImgTag = document.createElement('img');
        prizeImgTag.src = prize.image;
        prizeImgTag.classList.add('prize-img');

        const prizeSpan = document.createElement('span');
        prizeSpan.textContent = prize.name;
        prizeSpan.classList.add('prize-span');

        
        prizeDiv.appendChild(prizeImgTag);
        prizeDiv.appendChild(prizeSpan);
        prizesContainer.appendChild(prizeDiv);
    });
}