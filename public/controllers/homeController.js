import {
    templates
} from 'templates';
import 'bootstrap';
import 'popperjs';

const homeController = function() {
    $(document).ready(() => {
        templates.getPage('home', {})
            .done(() => {
                $('#carouselExampleControls').addClass('carousel').addClass('slider');
                $('#big-header').removeClass('header-main')
                $('#big-header').addClass('header');
                $('.footer').addClass('index-footer');
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