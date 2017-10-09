import { templates } from 'templates';
import { UserRequester } from 'userRequester';

const showsController = function() {

    let shows;
    let childArray = [];
    firebase.database().ref('/shows/').once('value').then((snapshot) => {
        shows = snapshot.val();
        return shows;
    }).then((shows) => {
        for (var show of shows) {
            let name = show.name;
            let description = show.description;
            let categories = show.categories;
            let rating = show.rating;
            let path = show.picturePath;
            let id = show.id;

            childArray.push({
                "name": name,
                "description": description,
                "categories": categories,
                "rating": rating,
                "path": path,
                "id": id,
            })
        }

        return childArray;
    }).then((arr) => {
        templates.getPage('shows', arr).done(() => {
            $('#dropdownMenuLink').click(() => {
                if ($('#dropdownMenu').hasClass('hidden')) {
                    $('#dropdownMenu').removeClass('hidden');
                } else {
                    $('#dropdownMenu').addClass('hidden');
                }
            });
            $('#title').html('Shows');
            $('#subtitle').html('Browse shows from several different categories.');

            $('#3').hide();
            $('#4').hide();
            $('#5').hide();
            $('#6').hide();


            $('#page-1').click(() => {
                $('#page-info').html('Page 1 of 3');
                $('#1').show();
                $('#2').show()
                $('#3').hide();
                $('#4').hide();
                $('#5').hide();
                $('#6').hide();
            })

            $('#page-2').click(() => {
                $('#page-info').html('Page 2 of 3');
                $('#1').hide();
                $('#2').hide()
                $('#3').show();
                $('#4').show();
                $('#5').hide();
                $('#6').hide();
            })

            $('#page-3').click(() => {
                $('#page-info').html('Page 3 of 3');
                $('#1').hide();
                $('#2').hide()
                $('#3').hide();
                $('#4').hide();
                $('#5').show();
                $('#6').show();
            })

        })
    });



};
export { showsController };