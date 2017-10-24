import {
    templates
} from 'templates';
import 'bootstrap';
import 'popperjs';

const homeController = function(user) {
    $(document).ready(() => {
        templates.getPage('home', {})
            .done(() => {
                $('#carouselExampleControls').addClass('carousel').addClass('slider');
                $('#big-header').removeClass('header-main')
                $('#big-header').addClass('header');
                $('.footer').addClass('index-footer');

                if (user) {
                    $('.logged').removeClass('hidden');
                    $('.not-logged').addClass('hidden');
                } else {
                    $('.not-logged').removeClass('hidden');
                    $('.logged').addClass('hidden');
                }
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