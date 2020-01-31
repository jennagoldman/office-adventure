export function getUser() {
    const stringyUser = localStorage.getItem('user');
    const user = JSON.parse(stringyUser);
    return user;
}

export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

export function findById(someArray, someId) {
    for (let index = 0; index < someArray.length; index++) {
        const item = someArray[index];
        if (item.id === someId) {
            return item;
        }
    }
    return null;
}

