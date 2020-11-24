// if (!window.Intl) {
//     window.Intl = require('intl');
//     require('intl/local-data/jsonp/en-US-js');
//     require('intl/local-data/jsonp/es.js');
// }

// var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
// var IntlMessageFormat = require('intl-messageformat');

// import 'intl-relativeformat/dist/locale-date/en.js';
// import 'intl-relativeformat/dist/locale-date/es.js';
// import { locale } from 'moment';

// var es = require('./es');
// var es = require('./en-US');

// var MESSAGES = {};
// MESSAGES.es = es
// MESSAGES['en-US'] = en;

// var locale = 'es';

// module.exports = {
//     message: function(text, opts) {
//         opts = opts || {};
//         var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);
//         return msg.format(opts);
//     },
//     date: new IntlRelativeFormat(locale)
// }