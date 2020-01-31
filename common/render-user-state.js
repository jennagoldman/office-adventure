// const userStateDiv = document.getElementById('user-state');
const userImgTag = document.getElementById('user-avatar');
const userNameSpan = document.getElementById('user-name');
const userPointsSpan = document.getElementById('user-points');

export function renderUserState(user) {
    const userAvatarId = user.avatar;

    userImgTag.src = `../assets/avatars/${userAvatarId}.png`;
    userNameSpan.textContent = user.name;
    userPointsSpan.textContent = user.points;

}