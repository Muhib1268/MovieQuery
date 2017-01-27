var Movie = require('./movie.js');
var expect = require("chai").expect;

describe("Test for the movie Module", function() {
  describe("Find By Title Tester", function(){
    it("findByTitle('matrix')", function(){
      expect(Movie.findByTitle("matrix")).to.deep.equal(
      [ { title: 'The Matrix Revolutions', year: '2003', length: 129, rating: '6.7', genre: 'sci-fi' },
        { title: 'The Matrix Reloaded', year: '2003', length: 138, rating: '7.2', genre: 'sci-fi' } ]);
    });
    it("findByTitle('omen')", function(){
      expect(Movie.findByTitle("om")).to.deep.equal(
      [ { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" } ]);
    });
    it("findByTitle('patrio')", function(){
      expect(Movie.findByTitle("patriot")).to.deep.equal(
      [ { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" } ]);
    });
  });


  describe("Find By Genre Tester", function(){
    it("findByGenre('Sci')", function(){
      expect(Movie.findByGenre("Sci")).to.deep.equal(
      [ { title: "star wars episode 7", year: "1977", length: 125, rating: "8.7", genre: "sci-fi" },
	    { title: 'The Matrix Revolutions', year: '2003', length: 129, rating: '6.7', genre: 'sci-fi' },
        { title: 'The Matrix Reloaded', year: '2003', length: 138, rating: '7.2', genre: 'sci-fi' } ]);
    });
    it("findByGenre('horror')", function(){
      expect(Movie.findByGenre("horror")).to.deep.equal(
      [ { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" } ]);
    });
    it("findByGenre('histor')", function(){
      expect(Movie.findByGenre("histor")).to.deep.equal(
      [ { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
	    { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" } ]);
    });
  });


  describe("Find By Year Tester", function(){
    it("findByYear(1995, 2005)", function(){
      expect(Movie.findByYear(1995, 2005)).to.deep.equal(
      [ { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
	    { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" } ,
	    { title: 'The Matrix Revolutions', year: '2003', length: 129, rating: '6.7', genre: 'sci-fi' },
        { title: 'The Matrix Reloaded', year: '2003', length: 138, rating: '7.2', genre: 'sci-fi' }]);
    });
    it("findByYear(1970, 1990)", function(){
      expect(Movie.findByYear(1970, 1990)).to.deep.equal(
      [{ title: "star wars episode 7", year: "1977", length: 125, rating: "8.7", genre: "sci-fi" },
	   { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" }]);
    });
  });

  describe("Find By Rating Tester", function(){
    it("findByRating(7, 8)", function(){
      expect(Movie.findByRating(7, 8)).to.deep.equal(
      [{ title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" } ,
        { title: 'The Matrix Reloaded', year: '2003', length: 138, rating: '7.2', genre: 'sci-fi' }]);
    });
    it("findByRating(6, 7)", function(){
      expect(Movie.findByRating(6, 7)).to.deep.equal(
      [{ title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
     { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" }]);
    });
  });


  describe("Find By Rating And Year For A Genre Tester", function(){
    it("findByRatingAndYearForAGenre(1970, 2005, 7, 9, 'sci-fi')", function(){
      expect(Movie.findByRatingAndYearForAGenre(1970, 2005, 7, 9, "sci-fi")).to.deep.equal(
      [ { title: 'The Matrix Reloaded', year: '2003', length: 138, rating: '7.2', genre: 'sci-fi' },
        { title: "star wars episode 7", year: "1977", length: 125, rating: "8.7", genre: "sci-fi" }]);
    });
    it("findByRatingAndYearForAGenre(2000, 2005, 7, 8, 'historical')", function(){
      expect(Movie.findByRatingAndYearForAGenre(2000, 2005, 7, 8, 'historical')).to.deep.equal(
      [{ title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" } ]);
    });
  });



});
