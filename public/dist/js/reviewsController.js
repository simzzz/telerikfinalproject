import { templates } from 'templates';
import { UserRequester } from 'userRequester';

const reviewsController = function() {
    let reviews;
    let childArray = [];
    firebase.database().ref('/reviews/').once('value').then((snapshot) => {
        reviews = snapshot.val();
        return reviews;
    }).then((reviews) => {
        for (let review of reviews) {
            let id = review.id;
            childArray.push({
                "id": id,
                "title": review.title,
                "author": review.author,
                "commentsAmount": review.commentsAmount,
                "date": review.date,
                "shortDescription": review.shortDescription,
                "description": review.description,
                "picturePath": review.picturePath,
                "comments": review.comments,
            })
        }
        return childArray;
    }).then((arr) => {
        templates.getPage('reviews', arr).done(() => {
            $(document).ready(() => {
                $('#dropdownMenuLink').click(() => {
                    if ($('#dropdownMenu').hasClass('hidden')) {
                        $('#dropdownMenu').removeClass('hidden');
                    } else {
                        $('#dropdownMenu').addClass('hidden');
                    }
                });
                $('#title').text('Reviews');
                $('#subtitle').text('Critic reviews at your disposal!');

                $('.show-more').click(() => {
                    $('.post-small').addClass('hidden');
                    $('.post-extended').removeClass('hidden');
                    $('.comments').removeClass('hidden');
                })

                $('.show-less').click(() => {
                    $('.post-small').removeClass('hidden');
                    $('.post-extended').addClass('hidden');
                    $('.comments').addClass('hidden');
                });
                $('#2').addClass('hidden');

                $('.review-one').click(() => {
                    $('#2').addClass('hidden');
                    $('#1').removeClass('hidden');
                })
                $('.review-two').click(() => {
                    $('#1').addClass('hidden');
                    $('#2').removeClass('hidden');
                })
            });
        });
    })

};

export { reviewsController };