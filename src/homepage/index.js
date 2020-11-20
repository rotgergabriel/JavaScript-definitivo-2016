var page =require('page');
var empty=require('empty-element');
var template = require('./template');
const title = require('title');


page('/', function(ctx, next) {
    title('Platzigram');
    var main = document.getElementById('main-container');

    var picture= [
        {
            user:{
                username: 'Rotger',
                avatar: 'https://media.istockphoto.com/vectors/man-avatar-business-angry-cartoon-illustration-vector-vector-id1277332892'
            },
            url: 'https://materializecss.com/images/office.jpg',
            likes: 2048,
            liked: true
        },
        {
            user:{
                username: 'Rotger',
                avatar: 'https://media.istockphoto.com/vectors/man-avatar-business-angry-cartoon-illustration-vector-vector-id1277332892'
            },
            url: 'https://materializecss.com/images/office.jpg',
            likes: 2048,
            liked: true
        },
    ]

    empty(main).appendChild(template(picture));
})