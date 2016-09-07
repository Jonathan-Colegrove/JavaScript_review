// 1. Assign the message "Hello, World!" to a variable.
var hello = 'Hello, World!'

// 2. Assign a different string to a different variable.

var daniel = 'Lion\'s Den'

// 3. Assign a number to a variable.

var favoriteNumber = 4

// 4. Use string concatenation to display the number from #3 in a string.

console.log('My favorite number is ' + favoriteNumber)

// 5. Make an array of at least four of your favorite movies or books or bands.

var favoriteMovies = ['The Count of Monte Cristo', 'The Bourne Trilogy', 'The Swiss Family Robinson', 'Treasure Island']

// 6. Make a object of information about yourself with at least four properties.

var jOnAtHaN = {
  collects: 'coins',
  likes_lizards: 'yes',
  pets: 'cat',
  can_swim: 'yes'
}

// 7. Make an array of objects containing more information about your favorite movies. The objects should have at least three properties.
var movies = [
  { title: 'Count of Monte Cristo',
    year: 2002,
    mainActor: 'Jim Caviezel',
    theme: 'Revenge'
  },

  { title: 'Bourne Identity',
    year: 2002,
    mainActor: 'Matt Damon',
    theme: 'Mystery'
  },

  { title: 'Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    mainActor: 'Elijah Wood',
    theme: 'Adventure'
  }
]


// 8. Use `for` to loop through the answer from exercise #7 and print only one property from the object. i.e., given `{ title: "Gone with the Wind" }` you print "Gone with the Wind".
for (let i=0; i < movies.length; i++){
  console.log(movies[i].theme)
}
