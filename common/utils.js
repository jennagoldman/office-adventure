export function getUser() {
    const stringyUser = localStorage.getItem('user');
    const user = JSON.parse(stringyUser);
    return user;
}


export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

