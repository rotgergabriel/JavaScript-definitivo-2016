var yo = require('yo-yo');
var moment = require('moment');

// if (!window.Intl) {
//     window.Intl = require('intl');
//     require('intl/local-data/jsonp/en-US-js');
//     require('intl/local-data/jsonp/es.js');
// }
// Implement intl-relativeformat failed because use old version
// var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');

// import 'intl-relativeformat/dist/locale-date/en.js';
// import 'intl-relativeformat/dist/locale-date/es.js';

// var rf = new IntlRelativeFormat('es');
// var output = rf.format(dateValue);

module.exports = function (pic) {

    var el;

    function render(picture) {
        return yo `<div class="card ${picture.liked ? 'liked' : ''}">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${picture.url}" />
            </div>
            <div class="card-content">
                <a href="/user/${picture.user.username}" class="card-title">
                    <img src="${picture.user.avatar}" class="avatar" />
                    <span class="username">${picture.user.username}</span>
                </a>
                <small class="right time">${moment(picture.createdAt).fromNow()}</small>
                <p>
                    <a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                    <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
                    <span class="left likes">${picture.likes} me gusta</span>
                </p>
            </div>
        </div>`

    // translate error. return old version because library moment.js error 
    //     function render(picture) {
    //     return yo `<div class="card ${picture.liked ? 'liked' : ''}">
    //         <div class="card-image waves-effect waves-block waves-light">
    //             <img class="activator" src="${picture.url}" />
    //         </div>
    //         <div class="card-content">
    //             <a href="/user/${picture.user.username}" class="card-title">
    //                 <img src="${picture.user.avatar}" class="avatar" />
    //                 <span class="username">${picture.user.username}</span>
    //             </a>
    //             <small class="right time">${translate.date.format(picture.createdAt).fromNow()}</small>
    //             <p>
    //                 <a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
    //                 <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
    //                 <span class="left likes">${translate.message('likes', {likes: picture.likes})}</span>
    //             </p>
    //         </div>
    //     </div>`
    // }
    }

    function like(liked) {
        pic.liked = liked;
        pic.likes+=liked ? 1 : -1; 
        var newEl = render(pic);
        yo.update(el, newEl);
        return false;
    }
        
    el = render(pic);
    return el;
}

