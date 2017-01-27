//var fs = require('fs');

var movieList = [{
    title: "star wars episode 7",
    year: "1977",
    length: 125,
    rating: "8.7",
    genre: "sci-fi"
}, {
    title: "The Matrix Revolutions",
    year: "2003",
    length: 129,
    rating: "6.7",
    genre: "sci-fi"
}, {
    title: "Omen : The Final Conflict",
    year: "1981",
    length: 108,
    rating: "6.7",
    genre: "horror"
}, {
    title: "Gladiator",
    year: "2000",
    length: 155,
    rating: "8.5",
    genre: "historical"
}, {
    title: "The Patriot",
    year: "2000",
    length: 165,
    rating: "7.1",
    genre: "historical"
}, {
    title: "The Matrix Reloaded",
    year: "2003",
    length: 138,
    rating: "7.2",
    genre: "sci-fi"
}];

module.exports.findByTitle = function(filmTitle) {

    var re = new RegExp(filmTitle, "i");

    return movieList.filter((movie)=>
      re.test(movie.title));
}

module.exports.findByGenre = function(filmGenre) {

    var re = new RegExp(filmGenre, "i");

    return movieList.filter((movie)=>
      re.test(movie.genre));
}


module.exports.findByYear = function(start, end) {

    var list=movieList.filter((movie)=>
              movie.year>=start && movie.year<=end).sort((a, b)=>
                a.year - b.year);
    return list;
}

module.exports.findByRating = function(start, end) {

  var list=movieList.filter((movie)=>
            movie.rating>=start && movie.rating<=end).sort((a, b)=>
              a.rating - b.rating);
  return list;
}

module.exports.findByRatingAndYearForAGenre = function(year1, year2, rating1, rating2, filmGenre) {
    var list = module.exports.findByYear(year1, year2);

    var re = new RegExp(filmGenre, "i");
    var list1 = list.filter((movie)=>
      re.test(movie.genre));

    var list2 = list1.filter((movie)=>
        movie.rating>=rating1 && movie.rating<=rating2).sort((a, b)=>
                  a.rating - b.rating);
    return list2;


}
