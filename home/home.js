import { makeUser } from './makeUser.js';
import { saveUser } from '../common/utils.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', (event) => {
    // don't reload page
    event.preventDefault();

    // get the data from the form, use it to create a new user object
    const userData = new FormData(userForm);
    const user = makeUser(userData);

    saveUser(user);

    window.location = '../map/index.html';

});









