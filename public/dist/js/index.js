import { templates } from 'templates';
import { registerController } from 'registerController';
import { loginController } from 'loginController';
import { logoutController } from 'logoutController';
import { userController } from 'userController';
import { homeController } from 'homeController';
import { contactsController } from 'contactsController';
import { showsController } from 'showsController';
import { changePasswordController } from 'changePasswordController';
import { editProfileController } from 'editProfileController';
import { reviewsController } from 'reviewsController';
import { UserRequester } from 'userRequester';

const userRequester = new UserRequester();

let currentlyLoggedUser = userRequester.currentUser;

userRequester.onAuthStateChanged(function(user) {
    if (user) {
        currentlyLoggedUser = user;

        $('#loginBtn').addClass('hidden');
        $('#registerBtn').addClass('hidden');
        $('#currentUser').removeClass('hidden');
        $('#currentUserInner').text(`Hello, ${currentlyLoggedUser.displayName}`);
        $('#logoutBtn').removeClass('hidden').on('click', () => logoutController(currentlyLoggedUser));
    }
});

const router = new Navigo(null, false, '#!');

router
    .on(() => homeController())
    .on({
        '/home': () => homeController(),
        '/register': () => registerController(),
        '/login': () => loginController(),
        '/logout': () => logoutController(),
        '/user': () => userController(currentlyLoggedUser),
        '/changePassword': () => changePasswordController(currentlyLoggedUser),
        '/editProfile': () => editProfileController(currentlyLoggedUser),
        '/contact': () => contactsController(),
        '/shows': () => showsController(),
        '/reviews': () => reviewsController()
    })
    .resolve();