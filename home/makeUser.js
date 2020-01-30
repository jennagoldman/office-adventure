function makeUser(userData) {
    const user = {
        name: userData.get('name'),
        avatar: userData.get('avatar'),
        points: 0,
        completedLevels: [],
    };
    return user;
}

export { makeUser };