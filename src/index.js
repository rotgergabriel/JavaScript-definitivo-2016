var page =require('page');

var main = document.getElementById('main-container');

page('/', function() {
    main.innerHTML = 'Home';
})
page('/signup', function(ctx, next) {
    main.innerHTML = 'Signup';
})