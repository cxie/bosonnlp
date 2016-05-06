
'use strict';

var bosonnlp = require('./lib/bosonnlp');
var boson = new bosonnlp("");

var data = '2013年二月二十八日下午四点三十分二十九秒';
boson.tag(data, function (results) {
    console.log("time:", results);
});
