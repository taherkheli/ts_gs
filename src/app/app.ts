function startGame() {
    // starting a new game

    let playerName : string | undefined = getInputValue("playername");
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
    // let messageElement : HTMLElement | null = document.getElementById('messages');
    // messageElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name : string = 'MultiMath Player'): void{
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementId : string) : string | undefined {
    const inputElement : HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

    if (inputElement.value === '')
        return undefined;
    else
        return inputElement.value;
}

function postScore(score : number, playerName : string = 'MultiMath Player'): void {

    let logger : (value : string) => void; 

    if(score < 0){
        logger = logError;
    }
    else{
        logger = logMessage;
    }

    const scoreElement : HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;    

    logger(`Score: ${score}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame);

//converting this traditional function to an arrow function
// function logMessage(message : string): void {
//     console.log((message));
// }
const logMessage =  (message : string) : void => console.log(message);

function logError(err : string): void {
    console.error(err);
}