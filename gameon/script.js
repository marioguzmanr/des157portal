(function(){
	
	"use strict";
	/* 
	This gets the player: gameData.players[gameData.index]
	This gets the first die: gameData.dice[gameData.roll1-1]
	This gets the second die: gameData.dice[gameData.roll2-1]
	This gets the score of the current player: gameData.score[gameData.index]
	*/
	
	const startGame = document.getElementById('startgame');
	const gameControl = document.getElementById('gamecontrol');
	const game = document.getElementById('game');
	const score = document.getElementById('score');
	const actionArea = document.getElementById('actions');
	const startSound = document.getElementById('startSound');
	const diceSound = document.getElementById('diceRoll');
	const bgMusic = document.getElementById('background');
	const crashSound = document.getElementById('crash');
	const winSound = document.getElementById('win');

	bgMusic.volume = 0.05;

	const gameData = {
		dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 
			   'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
		players: ['	Player 1', 'Player 2'],
		playersPhotos: ['player1.png', 'player2.png'],
		score: [0, 0],
		roll1: 0,
		roll2: 0,
		rollSum: 0,
		index: 0,
		gameEnd: 40
	};

	startGame.addEventListener('click', function () {
		gameData.index = Math.round(Math.random());
		console.log(gameData.index);
	
		gameControl.innerHTML = '<h2>The Race Has Started</h2>';
		gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
		game.style.display += 'flex';
    	actions.style.display += 'flex';
		score.style.display += 'flex';
		startSound.play();

		document
			.getElementById('quit').addEventListener('click', function () {
				location.reload();
			});

		setUpTurn();
	});

	function setUpTurn() {
		game.innerHTML = `<img src="${gameData.playersPhotos[gameData.index]}">`;
		game.innerHTML += `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
		document.getElementById('roll').addEventListener('click', function(){

			throwDice();

		});
	}

	function throwDice(){
		actionArea.innerHTML = '';
		gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
		gameData.roll2 = Math.floor(Math.random() * 6) + 1;
		diceSound.play();
		game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		game.innerHTML += `<div id="dices">
							<img src="${gameData.dice[gameData.roll1-1]}"> 
							<img src="${gameData.dice[gameData.roll2-1]}">
							</div>`;
		gameData.rollSum = gameData.roll1 + gameData.roll2;

		// if two 1's are rolled...
		if( gameData.rollSum === 2 ){ 
			game.innerHTML += '<p>Oh snap! Devastating Crash!</p>';
			crashSound.play();
			gameData.score[gameData.index] = 0;
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			showCurrentScore();
			setTimeout(setUpTurn, 2000);
		}

		// if either die is a 1...
		else if(gameData.roll1 === 1 || gameData.roll2 === 1){ 
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to  ${
				gameData.players[gameData.index]
			}</p>`;
			setTimeout(setUpTurn, 2000);
		}

		// if neither die is a 1...
		else { 
			gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
			actionArea.innerHTML = '<button id="rollagain">Roll again <img src="reload.svg"></button> or <button id="pass">Pass</button>';

			document.getElementById('rollagain').addEventListener('click', function () {
				//setUpTurn();
				throwDice();
			});

			document.getElementById('pass').addEventListener('click', function () {
				gameData.index ? (gameData.index = 0) : (gameData.index = 1);
				setUpTurn();
			});

			checkWinningCondition();
		}

	}

	function checkWinningCondition() {
		if (gameData.score[gameData.index] > gameData.gameEnd) {
			score.innerHTML = `<h2>${gameData.players[gameData.index]} 
			wins</h2><p>with <strong>${gameData.score[gameData.index]}</strong> points!</p>`;
			score.innerHTML += `<img src="${gameData.playersPhotos[gameData.index]}">`;
			winSound.play();
			actionArea.innerHTML = '';
			document.getElementById('quit').innerHTML = 'Start a New Game?';
		} else {
			// show current score...
			showCurrentScore();
		}
	}

	function showCurrentScore() {
		score.innerHTML = `<p>The score is currently: <br><strong>${gameData.players[0]}:
		${gameData.score[0]}</strong> <br> <strong>${gameData.players[1]}: 	
		${gameData.score[1]}</strong></p>`;
	}
}());