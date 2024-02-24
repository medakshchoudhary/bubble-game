var timer = 60;
var score = 0;
var newHit = 0;

function makeRandomBubbles(){
    var bubbles = "";

    for(var i =1;i<=96;i++){
        var rn = Math.floor(Math.random()*10);
        bubbles += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pBottom").innerHTML = bubbles;
}

function runTimer(){
    var timerInterval = setInterval(function (){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        // when game ends then =>
        else{
            document.querySelector("#pBottom").innerHTML = `<h1>Game over <br> Your Score : ${score}</h1> <br> <h3>Reload the page to play again</h3>`;
            clearInterval(timerInterval);
        }
    },1000)

}

function getNewHit(){
    newHit = Math.floor(Math.random()*10);
    document.querySelector("#newHit").textContent = newHit;
}

function scoreIncreaser(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
function scoreDecreaser(){
    score -= 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pBottom")
.addEventListener("click",function (dets){
    var bubbleClicked = Number(dets.target.textContent);
    if(bubbleClicked === newHit){
        scoreIncreaser();
        getNewHit();
        makeRandomBubbles();
    }
    else if(bubbleClicked !== newHit){
        scoreDecreaser();
        getNewHit();
        makeRandomBubbles();
    }
})


runTimer();
getNewHit();
makeRandomBubbles();
