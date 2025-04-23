/*
Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.
Create a Tic-Tac-Toe game grid using your HTML element of choice.
When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
A heading should say whether it is X's or O's turn and change with each move made.
A button should be available to clear the grid and restart the game.
When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.
*/

let box0 = $('#box0'); //here I am using Jquery to select the boxes in the grid, each line indicates each box in the grid (ther are 9 boxes in total)
let box1 = $('#box1');
let box2 = $('#box2');
let box3 = $('#box3');
let box4 = $('#box4');
let box5 = $('#box5');
let box6 = $('#box6');
let box7 = $('#box7');
let box8 = $('#box8');

let player1 = 'X'; //this variable will be used to check if it is player 1 or player 2's turn
let player2 = 'O'; //this variable will be used to check if it is player 1 or player 2's turn

let turn = 0; //this variable will be used to check if it is player 1 or player 2's turn
let winner = false; //this variable will be used to check if there is a winner or not

$('#alertStart').hide(); //here I am using Jquery to hide the alert at the start of the game
$('#alertWinner').hide(); //here I am using Jquery to hide the alert at the start of the game
$('#alertDraw').hide();  //here I am using Jquery to hide the alert at the start of the game

//to keep track of current player
let currentPlayer=''; //this variable will have an empty string at the start of the game, and will be used to check if it is player 1 or player 2's turn

const winningOutcomes = [ //this array will show the winning combinations of the game
    [box0, box1, box2], [box3, box4, box5], [box6, box7, box8], //these are the horizontal winning combinations
    [box0, box3, box6], [box1, box4, box7], [box2, box5, box8], //these are the vertical winning combinations
    [box0, box4, box8], [box2, box4, box6] //these are the diagonal winning combinations
];

const endGame = () => { //this function will be used to end the game
        console.log('End Game!'); //this will show in the console that the game has ended
        $(".box").css('pointer-events', 'none'); //this line will disable the boxes so that they can't be clicked on anymore, the only thing that can be clicked on is the reset button
}

const checkWinner = (currentPlayer, a, b, c) => { //this function will be used to check if there is a winner or not

    if(a.text() === currentPlayer && b.text() === currentPlayer && c.text() === currentPlayer) { //this "if" statement is going to check the text in the box to see if it is equal to the current player
        winner = true; //if the text in the box is equal to the current player, then the winner variable will be set to true
        console.log(`Found Winner, its ${currentPlayer}!`); //this log will in the console that there is a winner

        a.removeClass('text-info bg-dark');  //this line will remove the class from the box that is clicked on to highlight the current player's turn
        b.removeClass('text-info bg-dark'); 
        c.removeClass('text-info bg-dark'); 

        a.addClass('text-dark bg-info'); //this line will add a class to the box that is clicked on to highlight the current player's turn
        b.addClass('text-dark bg-info');
        c.addClass('text-dark bg-info');
        
        if(currentPlayer === 'X'){
            currentPlayer = "Player 1"; //this line will print out the string "Player 1"
        } else {
            currentPlayer = "Player 2"; //this line will print out the string "Player 2"
        }
        $('#alertWinner').text(`GAME OVER... ${currentPlayer} WINS!`) //this line will print out the string "GAME OVER... Player 1 WINS!" or "GAME OVER... Player 2 WINS!" depending on who wins
        $("#alertWinner").show(); //this line will show a winner

        endGame(); //this line will end the game
    }
}


const checkOutcomes = () => { //this function will be used to check if there is a winner or not
    checkWinner(currentPlayer, ...winningOutcomes[0]); //this line will check the first winning combination
    checkWinner(currentPlayer, ...winningOutcomes[1]); //this line will check the second winning combination
    checkWinner(currentPlayer, ...winningOutcomes[2]); //this line will check the third winning combination
    checkWinner(currentPlayer, ...winningOutcomes[3]); //this line will check the fourth winning combination
    checkWinner(currentPlayer, ...winningOutcomes[4]); //this line will check the fifth winning combination
    checkWinner(currentPlayer, ...winningOutcomes[5]); //this line will check the sixth winning combination
    checkWinner(currentPlayer, ...winningOutcomes[6]); //this line will check the seventh winning combination
    checkWinner(currentPlayer, ...winningOutcomes[7]); //this line will check the eighth winning combination
};
    
   




const startGame = () => { //this function will be used to start the game

    console.log('Start Game!'); //this will show in the console that the game has started
    console.log(turn++); //turn will be incremented by 1
    currentPlayer = player1; //player starting off will be player 1
    console.log(currentPlayer); //this will show in the console that the current player is player 1

    $('#p1').addClass('bg-light border border-info');

    //show the start alert
    $('#alertStart').show(); //here I am using Jquery to show the alert at the start of the game


    //adds an option to the boxes to click on them
    
    $('.box').on('click', function(){
        $('#alertStart').hide();

        $(this).text(currentPlayer); //this will show the current player in the box that is clicked on (which will be X or O)

        if(turn > 4) { //this "if" statement is going to check if the turn is greater than 4, which means that there are at least 5 turns played
            console.log('Winner?'); //this log will show in the console that there is a winner, and we can't have a winner until AT LEAST the fifth turn
            checkOutcomes(); //this line will check the outcomes of the game
        }

        if(currentPlayer === player1) { //this "if" statement is going change the player from player 1 to player 2
            currentPlayer = player2; //this is the current player which will then be changed to player 2 by using...
            console.log(turn++); //...this log, will change the turn from player 1 to player 2, but then we have to repeat that with the else statement
            $('#p2').addClass('bg-light border border-info'); //in this line, we will add a class to player 2 to highlight the current player's turn
            $('#p1').removeClass('bg-light border border-info'); //and then in this line we will remove the class from player 1 to highlight the current player's turn
        } else { //by using an else statement
            currentPlayer = player1; //same as above, this is the current player (2) which will then be changed to player 1 by using...
            console.log(turn++); //...this log, this will change it from player 2 to player 1 again
            $('#p1').addClass('bg-light border border-info'); //this line will add a class to player 1 to highlight the current player's turn (2)
            $('#p2').removeClass('bg-light border border-info'); //and this line will remove the class from player 2 to highlight the current player's turn (1)
        }

    })
    
}

//Make the start button work
document.getElementById('startBtn').addEventListener('click', ()=> startGame()); //here I am using Jquery to add an event listener to the start button)

document.getElementById('resetBtn').addEventListener('click', ()=> document.location.reload(true)); //here I am using Jquery to add an event listener to the reset button, which will reload the page and reset the game

