const mapContainer = document.getElementById('map-container');

export function createLevelsLinks(levels) {
    levels.forEach(level => {
        const levelLink = document.createElement('a');
        levelLink.textContent = level.name;
        levelLink.href = `../levels/id=${level.id}`;
        levelLink.style.top = level.map.top;
        levelLink.style.left = level.map.left;
        levelLink.classList.add('level-link');

        mapContainer.appendChild(levelLink);

        return levelLink;
    });
}