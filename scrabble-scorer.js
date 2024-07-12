// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  let totalScore = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
      totalScore += Number(pointValue);
		 }
 
	  }
	}
    return totalScore;
  //console.log(`Score for '${word}': ${totalScore}\n`)
	//return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let userWord = input.question(`Let's play some scrabble! 

Enter a word to score: `);
   return userWord;
};

let newPointStructure;

let simpleScorer = function(word){
  word = word.toUpperCase();
	let letterPoints = "";
  let totalScore = 0;
 
	for (let i = 0; i < word.length; i++) {
 
			letterPoints += `Points for '${word[i]}': 1 \n`
      totalScore += 1;
	
	}
      return totalScore;
  // console.log(`Score for '${word}': ${totalScore}\n`)
	// return letterPoints;

};

let vowelBonusScorer = function(word){
  word = word.toUpperCase();
	let letterPoints = "";
  let totalScore = 0;
 
	for (let i = 0; i < word.length; i++) {
      if (word[i] === 'A' || word[i] === 'E' || word[i] === 'I' || word[i] === 'O' || word[i] === 'U'){
			    letterPoints += `Points for '${word[i]}': 3 \n`;
          totalScore += 3;
      }
      else{
        letterPoints += `Points for '${word[i]}': 1 \n`
        totalScore += 1;
      }
	}
    return totalScore;
  // console.log(`Score for '${word}': ${totalScore}\n`)
	// return letterPoints;

};

let scrabbleScorer;

const objectSimpleScore = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScorer
};
const objectBonusVowel = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction: vowelBonusScorer

};
const objectOldScorer = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scorerFunction: oldScrabbleScorer

};

const scoringAlgorithms = [objectSimpleScore, objectBonusVowel, objectOldScorer];

function scorerPrompt() {
  console.log(`Which scoring algorithm would you like to use?: \n`)

  for (i=0; i<3; i++){
    
      console.log(`${i} - ${scoringAlgorithms[i]["name"]} : ${scoringAlgorithms[i]["description"]} `);
    
  }
  
  return scoringAlgorithms[input.question(`Enter 0, 1 or 2:   `)];
  }
  


function transform() {};

function runProgram() {
  
  let userWord = initialPrompt();
   console.log(`Score for '${userWord}': ${scorerPrompt().scorerFunction(userWord)}`);
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
