import { getUser } from '../common/utils.js';

const mapContainer = document.getElementById('map-container');

const user = getUser();

export function createLevelsLinks(levels) {
    levels.forEach(level => {
        const levelLink = document.createElement('a');
        levelLink.textContent = level.name;
        levelLink.id = level.id;
        levelLink.href = `../levels/?id=${level.id}`;
        levelLink.style.top = level.map.top;
        levelLink.style.left = level.map.left;
        levelLink.classList.add('level-link');

        user.completedLevels.forEach(completedLevel => {
            if (level.id === completedLevel) {
                levelLink.href = '';
                levelLink.classList.add('completed-level-link');

                const completedLevelSpan = document.createElement('span');
                completedLevelSpan.classList.add('completed-level-span');
                completedLevelSpan.textContent = level.name;

                mapContainer.appendChild(completedLevelSpan);
            }
        });

        mapContainer.append(levelLink);

        return levelLink;
    });
}



