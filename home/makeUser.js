function makeUser(userData) {
    const user = {
        name: userData.get('name'),
        points: 0,
        completedLevels: [],
    };
    return user;
}

export { makeUser };