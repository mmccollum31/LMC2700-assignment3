let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    toTextDisplay("A new movie is added");

}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    toTextDisplay("Printing all movies....");
    for (let i = 0; i < allMovies.length; i++) {
        toTextDisplay(allMovies[i].title + ", rating of " + allMovies[i].rating + ", havewatched: " + allMovies[i].haveWatched);
    }
    toTextDisplay("You have " + allMovies.length + " movies in total");

}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    toTextDisplay("printing movie that has a rating higher than " + rating);
    let count = 0;
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            toTextDisplay(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            count++;
        }
    }
    toTextDisplay("In total, there are " + count + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    toTextDisplay("changing the status of the movie...");
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title == title) {
            allMovies[i].haveWatched = !(allMovies[i].haveWatched);
        }
    }
}

// Custom function to print text to the paragraph element
let toTextDisplay = (string) => {
    var para = document.getElementById("textdisplay");
    para.innerHTML += string + "<br>";
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

toTextDisplay("----------------");
toTextDisplay("running program......");
toTextDisplay("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

toTextDisplay("----------------");
addMovie(movie1);
toTextDisplay("----------------");



changeWatched("Spiderman");
toTextDisplay("----------------");

printMovies();

toTextDisplay("----------------");

changeWatched("Spiderman");
toTextDisplay("----------------");

printMovies();
toTextDisplay("----------------");

highRatings(3.5);