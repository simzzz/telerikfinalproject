import { templates } from 'templates';

const userController = function(user) {
    if (user) {
        templates.getPage('user', user)
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
                $('#title').html('Your Profile!')
                    //User profile favourites list
            });
    } else {
        location.hash = '/login';
    }
};

export { userController };