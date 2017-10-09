import {
    templates
} from 'templates';
import 'bootstrap';
import 'popperjs';

const homeController = function() {
    $(document).ready(() => {
        templates.getPage('home', {})
            .done(() => {

                $('#big-header').removeClass('header-main')
                $('#big-header').addClass('header')
            })
        jQuery.get('../templates/homeHeader.handlebars', (data) => {
            $('#header').html(data);
            $('#dropdownMenuLink').click(() => {
                if ($('#dropdownMenu').hasClass('hidden')) {
                    $('#dropdownMenu').removeClass('hidden');
                } else {
                    $('#dropdownMenu').addClass('hidden');
                }
            });
        })
    })
};

export {
    homeController
};