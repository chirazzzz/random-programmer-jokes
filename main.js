/* Create 4 variables and assign them to their respective elements: 
   setupDiv, punchlinDiv, punchlineBtn, newJokeBtn */

const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");

/* Setup an async function called getJoke
   Create a variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
   create a variable called joke that consumes the json data */

async function getJoke() {
  const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
  const joke = await jokePromise.json()
  console.log(joke)
  // Get the setup from the joke and insert it into the setupDiv element
  setupDiv.textContent = joke[0].setup // Need to target joke[0] because all data is in index 0 
}

getJoke()