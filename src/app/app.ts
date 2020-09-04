/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
  const player: Player = new Player();
  player.name = Utility.getInputValue('playername');

  const problemCount: number = Number(Utility.getInputValue('problemCount'));
  const factor: number = Number(Utility.getInputValue('factor'));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
  newGame.calculateScore();
});



// /// <reference path="player.ts" />

// function startGame() {
//     // starting a new game

//     let playerName : string | undefined = getInputValue("playername");
//     logPlayer(playerName);
//     postScore(80, playerName);
//     postScore(-5, playerName);
//     // let messageElement : HTMLElement | null = document.getElementById('messages');
//     // messageElement!.innerText = 'Welcome to MultiMath! Starting new game...';
// }

// function logPlayer(name : string = 'MultiMath Player'): void{
//     console.log(`New game starting for player: ${name}`);
// }

// function postScore(score : number, playerName : string = 'MultiMath Player'): void {

//     let logger : (value : string) => void; 

//     if(score < 0){
//         logger = logError;
//     }
//     else{
//         logger = logMessage;
//     }

//     const scoreElement : HTMLElement | null = document.getElementById('postedScores');
//     scoreElement!.innerText = `${score} - ${playerName}`;    

//     logger(`Score: ${score}`)
// }

// document.getElementById('startGame')!.addEventListener('click', startGame);

// //converting this traditional function to an arrow function
// // function logMessage(message : string): void {
// //     console.log((message));
// // }
// const logMessage =  (message : string) : void => console.log(message);

// function logError(err : string): void {
//     console.error(err);
// }

// // the following code shwos how to implement an interface with an object literal. We do not necessarily need a class definition
// // let myResult : Result = {
// //     playerName : 'Marie',
// //     score: 5,
// //     problemCount: 5,
// //     factor: 7
// // };     

// // let player: Person = {
// //     name:'Daniel',
// //     formatName: () => 'Dan'
// // };

// let firstPlayer: Player = new Player();
// firstPlayer.name = 'Lanier';
// console.log(firstPlayer.formatName());