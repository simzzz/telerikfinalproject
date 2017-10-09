import { templates } from 'templates';
import { UserRequester } from 'userRequester';

const loginController = function(user) {
    templates.getPage('login', {})
        .done(() => {
            $('#dropdownMenuLink').click(() => {
                if ($('#dropdownMenu').hasClass('hidden')) {
                    $('#dropdownMenu').removeClass('hidden');
                } else {
                    $('#dropdownMenu').addClass('hidden');
                }
            });
            $('#title').html('Log In');
            const $loginBtn = $('#btn-login');
            const $email = $('#tb-email');
            const $pass = $('#tb-password');

            $loginBtn.on('click', () => {
                if ($email.val() && $pass.val()) {
                    const userRequester = new UserRequester();
                    const user = Promise.resolve(userRequester.signInWithEmailAndPassword($email.val(), $pass.val()));

                    user
                        .then((usr) => {
                                $('#loginBtn').addClass('hidden');
                                $('#registerBtn').addClass('hidden');
                                $('#currentUser').removeClass('hidden');
                                $('#logoutBtn').removeClass('hidden');
                                $('#currentUserInner').text(`Hello, ${usr.displayName}`);
                                toastr.success(`You have successfully logged in as ${usr.displayName}`);
                                location.hash = '/home';
                            },
                            function(error) {
                                toastr.error(`There was an error: ${error.message}
                        Please try again.`);
                            });
                } else {
                    toastr.error('Fill all the fields!');
                }
            });
        });
};

export { loginController };