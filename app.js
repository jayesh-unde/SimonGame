let gameseq=[];
let userseq=[];
let highscore = 0;
let started = false;
let score = 0; 
let myAudio = document.querySelector('#audio');
let gameover = document.querySelector('#gover');

let btns =  ["red","green","blue","yellow"];
// these are the changes done for to see change in github repo.
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
h3.innerText = `highscore: ${highscore} `;
let start = document.querySelector(".start");

start.addEventListener("click",function(){
    console.log("game started");
    if(started==false){
        started =true;
        scoreup();
    }
})

function btnflash(randbtn){
    randbtn.classList.add("flash");
    setTimeout(() => {
        randbtn.classList.remove("flash");
    }, 700);
}
function userflash(randbtn){
    myAudio.play()
    randbtn.classList.add("userflash");
    setTimeout(() => {
        randbtn.classList.remove("userflash");
    }, 400);
}
function scoreup(){
    userseq=[];
    score++;
    h2.innerText= `Score : ${score}`;
    
    let randColor = btns[Math.floor(Math.random()*3)];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    btnflash(randbtn);
}
function check(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(scoreup,1000);
        }
    }else{
        h2.innerText="Game over Try Again";
        gameover.play();
        if(score>highscore){
            
            highscore=score;
            h3.innerText=`New Highscore ${highscore}`;
        }
        reset();
    }
}
function btnpress(){
    let btn = this;
    let rcolor = btn.getAttribute("id");
    userseq.push(rcolor);
    userflash(btn);
    check(userseq.length-1);
}
let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    userseq=[];
    gameseq=[];
    score=0;
    
}