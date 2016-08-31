//	THE LIRI BOT PROJECT
//	LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
var inquirer = require('inquirer');
var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs');

// Before You Begin
// LIRI will display your latest tweets. Twitter: @dankaltenbaugh MM16S	(Done)
// Make a new GitHub repository called liri-node-app and clone it to your computer. (Done)
// To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and IMDB APIs. 
//	You'll find these Node packages crucial for your assignment.

// Twitter
// Spotify
// Request
// You will use Request to grab data from the OMDB API.

// Instructions
// Make a .gitignore file (DONE)
// Make a JavaScript file named keys.js. (DONE)
// Get your Twitter API keys (DONE)
// random.txt (DONE)
// Make a JavaScript file named liri.js.(DONE)

// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
const keys = require('./keys.js');
// this is how to retrieve keys:
// console.log("Consumer key " + keys.twitterKeys.consumer_key);
// Make it so liri.js can take in one of the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says
// What Each Command Should Do
// node liri.js my-tweets
// This will show your last 20 tweets and when they were created at in your terminal/bash window.
// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// if no song is provided then your program will default to
// "The Sign" by Ace of Base
// node liri.js movie-this '<movie name here>'
// This will output the following information to your terminal/bash window:
// Title of the movie.
// Year the movie came out.
// IMDB Rating of the movie.
// Country where the movie was produced.
// Language of the movie.
// Plot of the movie.
// Actors in the movie.
// Rotten Tomatoes Rating.
// Rotten Tomatoes URL.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!
// node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.
// BONUS
// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.
// One More Thing
// If you have any questions about this project or about the material we covered, the instructor and your TAs are only a Slack message away.
// Good Luck!
// Copyright
// Coding Boot Camp (C) 2016. All Rights Reserved.
inquirer.prompt([
  {
    type: "list",
    name: "doingWhat",
    message: "What do you want to do?",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says",] 
  }
]).then(function(user){
  switch(user.doingWhat) {
    case('my-tweets'):
    case('spotify-this-song'):
    case('movie-this'):
    case('do-what-it-says'):
    default:
      console.log("Action " + user.doingWhat);
      break;
  }

});