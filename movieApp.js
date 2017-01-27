var fs = require('fs');


// var movies = require('./movie.js').findByTitle;
// var arr = movies(process.argv[2]);
// console.log(arr);

// var movies = require('./movie.js').findByGenre;
// var arr = movies(process.argv[2]);
// console.log(arr);

// var movies = require('./movie.js').findByYear;
// var arr = movies(process.argv[2], process.argv[3]);
// console.log(arr);

// var movies = require('./movie.js').findByRating;
// var arr = movies(process.argv[2], process.argv[3]);
// console.log(arr);

var movies = require('./movie.js').findByRatingAndYearForAGenre;
var arr = movies(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
console.log(arr);
