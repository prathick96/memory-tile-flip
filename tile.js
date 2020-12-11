document.body.setAttribute("background", "Images/bg.jpg");
document.body.style = "margin:0;";

var pgtitle = document.createElement("h1");
pgtitle.className = "pg-title";
pgtitle.innerHTML = "New Chef in Town!";

document.body.appendChild(pgtitle);

var mainGame = document.createElement("div");
mainGame.className = "main-game";
document.body.appendChild(mainGame);

var overlay = document.createElement("div");
overlay.className = "overlay";
overlay.innerText = "Welcome to MATCH YOUR FOOD..."
var smallOverlay = document.createElement("div");


var gameBoard = document.createElement("div");
gameBoard.className = "game-board";
mainGame.appendChild(gameBoard);

var scoreCard1 = document.createElement("div");
scoreCard1.className = "score-card";
scoreCard1.innerText = "Time:";
    var timeSpan = document.createElement("span");
    timeSpan.id = "timer";
    let timeCount = "02:00";
    timeSpan.innerHTML = timeCount;
    scoreCard1.appendChild(timeSpan);
gameBoard.appendChild(scoreCard1);

var scoreCard2 = document.createElement("div");
scoreCard2.className = "score-card";
scoreCard2.innerText = "Score:";
    var score = document.createElement("span");
    score.id = "score";
    let scoreCount = 0;
    score.innerHTML = scoreCount;
    scoreCard2.appendChild(score);
gameBoard.appendChild(scoreCard2);

var scoreCard3 = document.createElement("div");
scoreCard3.className = "score-card";
scoreCard3.innerText = "Flips:";
    var flips = document.createElement("span");
    flips.id = "flipCount";
    let flipCount = 0;
    flips.innerHTML = flipCount;
    scoreCard3.appendChild(flips);
gameBoard.appendChild(scoreCard3);

var row = 4;
var col = 7;
var tileCards = [];

function shuffle(array) {
    var currentIndex = array.length, temp, rand;
    while (0 !== currentIndex) {

    rand = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temp = array[currentIndex];
    array[currentIndex] = array[rand];
    array[rand] = temp;
    }
    return array;
}

  for(var i=1;i<=row;i++){
    for(var j=1; j<=col; j++){
        var oneTile = document.createElement("div");
        oneTile.className = "tile";
        oneTile.id = "tile-"+i+"-"+j;
        tileCards.push(oneTile);
    }
  }

var tileFace = [
    'Images/front-tile-1.jpg',
    'Images/front-tile-2.jpg',
    'Images/front-tile-3.jpg',
    'Images/front-tile-4.jpg',
    'Images/front-tile-5.jpg',
    'Images/front-tile-6.jpg',
    'Images/front-tile-7.jpg',
    'Images/front-tile-8.jpg',
    'Images/front-tile-9.jpg',
    'Images/front-tile-10.jpg',
    'Images/front-tile-11.jpg',
    'Images/front-tile-12.jpg',
    'Images/front-tile-13.jpg',
    'Images/front-tile-14.jpg',
    'Images/front-tile-1.jpg',
    'Images/front-tile-2.jpg',
    'Images/front-tile-3.jpg',
    'Images/front-tile-4.jpg',
    'Images/front-tile-5.jpg',
    'Images/front-tile-6.jpg',
    'Images/front-tile-7.jpg',
    'Images/front-tile-8.jpg',
    'Images/front-tile-9.jpg',
    'Images/front-tile-10.jpg',
    'Images/front-tile-11.jpg',
    'Images/front-tile-12.jpg',
    'Images/front-tile-13.jpg',
    'Images/front-tile-14.jpg'
];

var fiveMinutes = 60 * 2,
    display = document.getElementById('timer');
    startTimer(fiveMinutes, display);

for (var index = 0; index < tileCards.length; index++) {
    var ftt = tileCards[index];
    var img = document.createElement("img");
    img.className = "tile tile-img tile-face tile-hidden";
    img.src = tileFace[index];
    ftt.setAttribute('onclick', 'tileClik(event)');
    ftt.appendChild(img);    
}

var shuffledTiles =shuffle(tileCards);

for (var index = 0; index < shuffledTiles.length ; index++) {
    gameBoard.insertAdjacentElement('afterend', shuffledTiles[index]);
}


document.getElementById('tile-4-7').setAttribute("data", "momo");
document.getElementById('tile-4-6').setAttribute("data", "pretz");
document.getElementById('tile-4-5').setAttribute("data", "briyani");
document.getElementById('tile-4-4').setAttribute("data", "lasagna");
document.getElementById('tile-4-3').setAttribute("data", "pasta");
document.getElementById('tile-4-2').setAttribute("data", "cuppy");
document.getElementById('tile-4-1').setAttribute("data", "taco");
document.getElementById('tile-3-7').setAttribute("data", "steak");
document.getElementById('tile-3-6').setAttribute("data", "pancake");
document.getElementById('tile-3-5').setAttribute("data", "pizza");
document.getElementById('tile-3-4').setAttribute("data", "sandwich");
document.getElementById('tile-3-3').setAttribute("data", "nuggets");
document.getElementById('tile-3-2').setAttribute("data", "burger");
document.getElementById('tile-3-1').setAttribute("data", "icecream");
document.getElementById('tile-2-7').setAttribute("data", "momo");
document.getElementById('tile-2-6').setAttribute("data", "pretz");
document.getElementById('tile-2-5').setAttribute("data", "briyani");
document.getElementById('tile-2-4').setAttribute("data", "lasagna");
document.getElementById('tile-2-3').setAttribute("data", "pasta");
document.getElementById('tile-2-2').setAttribute("data", "cuppy");
document.getElementById('tile-2-1').setAttribute("data", "taco");
document.getElementById('tile-1-7').setAttribute("data", "steak");
document.getElementById('tile-1-6').setAttribute("data", "pancake");
document.getElementById('tile-1-5').setAttribute("data", "pizza");
document.getElementById('tile-1-4').setAttribute("data", "sandwich");
document.getElementById('tile-1-3').setAttribute("data", "nuggets");
document.getElementById('tile-1-2').setAttribute("data", "burger");
document.getElementById('tile-1-1').setAttribute("data", "icecream");



let clikdTile = null;
let preventClik = false;
let count = 0;
let mins;
let secs;

function startTimer(duration, display) {
    var timer = duration, mins, secs;
    setInterval(function () {
        mins = parseInt(timer / 60, 10);
        secs = parseInt(timer % 60, 10);

        mins = mins < 10 ? "0" + mins : secs;
        secs = secs < 10 ? "0" + secs : secs;

        display.innerText = mins + ":" + secs;

        if (--timer < 0) {
            alert("Time's up");
            window.location.reload();
        }

    }, 1000);
}

function tileClik(e){

    console.log('Goes into the fun');
    let tile = e.currentTarget;
    var tileImg = tile.childNodes;
    
    flipCount++;
    
    document.getElementById("flipCount").innerHTML =  flipCount;

    if(preventClik || tile === clikdTile || tile.className.includes('done')){
        console.log('returns bcoz tile is already clicked or matched');
        return;
    }    
    
    tileImg[0].className = tile.className.replace('tile tile-img tile-face').trim();
    tile.className += "done";
    console.log("img tag,..."+tileImg[0].className)
    console.log("div,..."+tile.className);

    if(!clikdTile){
        clikdTile = tile;
        console.log('if clickedtile is not null, assign tile');
    } else if (clikdTile){
        if(clikdTile.getAttribute('data')!==tile.getAttribute('data')){
            console.log("not equal");
            preventClik = true;
            var cc =clikdTile.childNodes
            setTimeout(()=>{
                console.log(cc[0].className);
                cc[0].className = cc[0].className.replace('done','').trim() + ' tile-hidden';
                clikdTile.className = clikdTile.className.replace('done','').trim();
                tileImg[0].className = tileImg[0].className.replace('done','').trim() + ' tile-hidden';
                tile.className = tile.className.replace('done','').trim();
                console.log("fun div,..."+clikdTile.className);
                console.log("fun til div,..."+tile.className);
                clikdTile = null;
                preventClik = false;
            }, 1000);
        } else {
            console.log("equal");
            count++;
            scoreCount+=50;
            setInterval(() => {
                document.getElementById('score').innerText = scoreCount;
            }, 200);
            console.log(count);
            clikdTile= null;
            if(count===14){
                setTimeout(() => {
                    console.log("Game over")
                    alert(`You Win! your score is: ${scoreCount}`);
                    window.location.reload();
                }, 500);
            }
        }
    }

}


var footer = document.createElement("footer");
footer.className = "footer";
footer.innerHTML = 'Created by Padmanabhan  ' + '&copy';
mainGame.insertAdjacentElement('afterend', footer);