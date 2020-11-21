var page = require('page');
var empty = require('empty-element');
var template = require('./template');
const title = require('title');

var main = document.getElementById('main-container');

page('/', function(ctx, next) {
    title('Platzigram');
    
    var picture= [
        {
            user:{
                username: 'Gabriel Augusto Rotger',
                avatar: 'https://media.istockphoto.com/vectors/man-avatar-business-angry-cartoon-illustration-vector-vector-id1277332892'
            },
            url: 'https://materializecss.com/images/office.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date()
        },
        {
            user:{
                username: 'Gabriel Augusto Rotger',
                avatar: 'https://media.istockphoto.com/vectors/man-avatar-business-angry-cartoon-illustration-vector-vector-id1277332892'
            },
            url: 'https://materializecss.com/images/office.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date()
        },
        {
            user:{
                username: 'Gabriel Augusto Rotger',
                avatar: 'https://media.istockphoto.com/vectors/man-avatar-business-angry-cartoon-illustration-vector-vector-id1277332892'
            },
            url: 'https://materializecss.com/images/office.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date()
        },
        {
            user:{
                username: 'Gabriel Augusto Rotger',
                avatar: 'https://media.istockphoto.com/vectors/man-avatar-business-angry-cartoon-illustration-vector-vector-id1277332892'
            },
            url: 'https://materializecss.com/images/office.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        }
    ]

    empty(main).appendChild(template(picture));main-container
})