import { templates } from 'templates';
import { UserRequester } from 'userRequester';

const registerController = function(user) {
    if (!user) {
        templates.getPage('register', {})
            .done(() => {
                $('#dropdownMenuLink').click(() => {
                    if ($('#dropdownMenu').hasClass('hidden')) {
                        $('#dropdownMenu').removeClass('hidden');
                    } else {
                        $('#dropdownMenu').addClass('hidden');
                    }
                });
                if (user) {
                    $('.logged').removeClass('hidden');
                    $('.not-logged').addClass('hidden');
                } else {
                    $('.not-logged').removeClass('hidden');
                    $('.logged').addClass('hidden');
                }
                $('#title').html('Sign Up');
                $('#subtitle').html('And start using our platform right away!');
                const $registerBtn = $('#btn-register');
                const $username = $('#tb-username');
                const $email = $('#tb-email');
                const $pass = $('#tb-password');

                $registerBtn.on('click', () => {
                    if ($email.val() && $pass.val()) {
                        const userRequester = new UserRequester();

                        const user = userRequester.createUserWithEmailAndPassword($email.val(), $pass.val())
                            .catch(function(error) {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                toastr.error(`There was an error: ${errorCode} - ${errorMessage}
                        Please try again.`);
                            });

                        user.then((usr) => {
                            userRequester.currentUser.updateProfile({
                                    displayName: $username.val(),
                                })
                                .then(() => {
                                    toastr.success(`You have successfully registered as ${$username.val()}`);
                                    location.hash = '/reviews';
                                });
                        });
                    } else {
                        toastr.error('Fill all the fields!');
                    }
                });
            });
    } else {
        toastr.error('You can\'t register while logged in!');
        location.hash = '/reviews';
    }
};

export { registerController };