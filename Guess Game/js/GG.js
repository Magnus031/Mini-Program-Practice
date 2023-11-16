let randomNumber = Math.floor(Math.random()*100)+1;
let counts = 1;
let guessField = document.getElementById("guessField");
let guesses = document.getElementById("guesses");
let lastResult = document.getElementById("lastResult");
let LowOrHigh = document.getElementById("LowOrHigh");
function guess(){
	if(counts>10){
		resetGame();
		window.alert("你的次数已经用完!\n请重新开始游戏。");
		return 
	}

	let value = guessField.value;
	if(value > randomNumber){
		addLastResult("你猜错了","red");
		addLowOrHigh("猜高了");
	}else if(value<randomNumber){
		addLastResult("你猜错了","red");
		addLowOrHigh("猜低了");
	}else{
		addLastResult("恭喜你猜对了","green");
		addLowOrHigh("猜对了");
	}
	guessField.value = null;
	addGuesses(value);
	
	counts++;
}

function addGuesses(value){
		if(counts==1){
			guesses.textContent="上次猜的数： ";
		}
		guesses.textContent += value + " ";
}

function addLastResult(message,color){
	lastResult.textContent = message;
	lastResult.style.backgroundColor = color;
}

function addLowOrHigh(message){
	LowOrHigh.textContent = message;
}

function resetGame(){
	randomNumber = Math.floor(Math.random()*100)+1;
	guessField.value = null;
	counts = 1;
	guesses.textContent = null;
	lastResult.textContent = null;
	lastResult.style.backgroundColor = null;
	LowOrHigh.textContent = null;
} 