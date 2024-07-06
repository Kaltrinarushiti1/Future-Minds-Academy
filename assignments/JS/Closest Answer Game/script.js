let correctAnswer = document.getElementById('correctAnswer');
let playerOneChoice = document.getElementById('playerOneChoice');
let playerTwoChoice = document.getElementById('playerTwoChoice');
let firstContainer = document.querySelector('.firstContainer');
let secondContainer = document.querySelector('.secondContainer');

let answer = Math.floor(Math.random() * 20) + 1;



let playerOne = parseInt(prompt('Player one:'));
let playerTwo = parseInt(prompt('Player two'));

if(isNaN(playerOne) || isNaN(playerTwo)){
    throw new Error('Please write only numbers')
};

if((playerOne < 0 || playerOne > 20) ||
(playerTwo < 0 || playerTwo >20)){
    throw new Error('Only select numbers 0-20!');
};

let playerOneDistance = Math.abs(answer - playerOne);
let playerTwoDistance = Math.abs(answer - playerTwo);

let winner;
if(playerOneDistance < playerTwoDistance){
    winner = 'playerOne';
}
else{
   winner = 'playerTwo';
}


console.log(answer);
console.log(winner);

correctAnswer.innerHTML = answer;
playerOneChoice.innerHTML = playerOne;
playerTwoChoice.innerHTML = playerTwo;

if (winner === 'playerOne') {
    firstContainer.style.backgroundColor = 'green';
    secondContainer.style.backgroundColor = 'red';
} else {
    firstContainer.style.backgroundColor = 'red';
    secondContainer.style.backgroundColor = 'green';
}