var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var axios = require('axios');



page('/', loadPicturesFetch, function(ctx, next) {
    title('Platzigram');
    
    var main = document.getElementById('main-container');

    empty(main).appendChild(template(ctx.pictures));
})

// function loadPictures(ctx, next) {
//     request
//     .get('/api/pictures')
//     .end(function (err, res) {
//         if (err) { return console.log(err) };
        
//         ctx.pictures = res.body;
//         next();
//     })
// }

// function loadPicturesAxios(ctx, next) {
//     axios
//     .get('/api/pictures')
//     .then(function (res) {
//         ctx.pictures = res.data;
//         next();
//     })
//     .catch(function (err) {
//         console.error(err)
//     })
// }

function loadPicturesFetch(ctx, next) {
    fetch('/api/pictures')
    .then(function (res){
        return res.json();
    })
    .then(function (pictures) {
        ctx.pictures = pictures;
        next()
    })
    .catch(function (err) {
        console.log(err);
    })
}

// async function asyncLoad(ctx, next) {
//     try {
//         ctx.pictures = await fetch('/api/pictures').then((res)=> res.json)
//         next()
//     } catch (error) {
//         return  console.log(err);
//     }
// }