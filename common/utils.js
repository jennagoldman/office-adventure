export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}