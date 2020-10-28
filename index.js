// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  counter1 is an example of closure whereby the variable let count is initialized withing the scope of the outer function counterMaker
 * 2. Which of the two uses a closure? How can you tell?
 * example 1
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 would be preferable if you wanted to protect the data stored inside of the function such as pay info etc. counter 2 would be preferable if you just neded a function run with no security for the data inside
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 
Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

     return Math.floor(Math.random() * 2) + 1;
     
} 

//test code
inning()
console.log(inning());


/* Task 3: finalScore()
Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.
For example, 
finalScore(inning, 9) might return: 
*/




function finalScore(callback, totalInnings)
{
homeTeam = (callback() * totalInnings);
awayTeam = (callback() * totalInnings);

    const gameOver = 
    {
        "Dodgers": homeTeam,
        "Yankees": awayTeam,
    }
    console.log(gameOver)
};


//test code
finalScore(inning, 9)




/* Task 4: 
Create a function called `scoreboard` that accepts the following parameters: 
(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings
and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(callback, amountOfInnings) {


for(let i = 1; i <= amountOfInnings; i++ )
{
    if (i === 1)
    {
        console.log(`${i}st inning: ${callback()} - ${inning()}`)

    } else if (i === 2)
    {
        console.log(`${i}nd inning: ${callback()} - ${inning()}`)

    } else if (i === 3)
    {
        console.log(`${i}nd inning: ${callback()} - ${inning()}`)
    } else
    {
        console.log(`${i}th inning: ${callback()} - ${inning()}`)
    }
}

}


// test code
scoreboard(inning, 9)


