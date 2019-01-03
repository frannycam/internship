
var rp = require('request-promise');
const url = 'https://solecollector.com/sd/sole-search-sneaker-database/';

rp(url)
    .then(function (html) {
        //success!
        console.log(html);
    })
    .catch(function (err) {
        //handle error
    });

const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://solecollector.com/sd/sole-search-sneaker-database/';

rp(url)
    .then(function (html) {
        //success!
        console.log($('big > a', html).length);
        console.log($('big > a', html));
    })
    .catch(function (err) {
        //handle error
    });


const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://solecollector.com/sd/sole-search-sneaker-database/';

rp(url)
    .then(function (html) {
        const brandURLs = [];
        for (let i = 0; i < 45; i++) {
            brandURLs.push($('class="brand- banner brand-item" > a', html)[i].attribs.href);  //FIX ATTRIBUTES
        }
        console.log(brandURLs);
    })
    .catch(function (err) {
        //handle error
    });


///////////////////////////
const rp = require('request-promise');
const url = 'https://solecollector.com/sd/00117/nike/';

rp(url)
    .then(function (html) {
        console.log(html);
    })
    .catch(function (err) {
        //handle error
    });


//////////
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://solecollector.com/sd/00117/nike/';

rp(url)
   .then(function (html) {
 //      console.log($('.firstHeading',html).text());TITLE IN BOX
//       console.log($('.bday', html).text());

    })
    .catch(function (err) {
        //handle error
    });

const rp = require('request-promise');
const $ = require('cheerio');

//const PotusParse = function (url) {
    return rp(url)
        .then(function (html) {
            return {
                name: $('.firstHeading', html).text(),
                birthday: $('.bday', html).text(),
            };
        })
        .catch(function (err) {
            //handle error
        });

//module.exports = StyleParse (potusparse);