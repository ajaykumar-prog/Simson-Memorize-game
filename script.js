let p=document.querySelector("p")

let gameSeq=[];
let userSeq=[];
let colors=["first","second","third","fourth"]
let level=0;
let started=false;
// to create game started or not ?
let main=document.addEventListener("keypress",function(){
    if(started==false){
    // console.log("game started!")
    started=true;
    levelup()
}
})
 function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100)
 }   
 function gameflash(btnn){
    btnn.classList.add("gameflash");
    setTimeout(function(){
        btnn.classList.remove("gameflash");
    },100)
 }   
 function levelup(){
    userSeq=[];
    level++;
    p.innerText=`Level ${level}`

    let ranidx=Math.floor(Math.random()*3);
    let randcolor=colors[ranidx];
    let ranbtn=document.querySelector(`.${randcolor}`)
    gameSeq.push(randcolor)
    // console.log(ranbtn)
    console.log(gameSeq)
    gameflash(ranbtn);
 }
 function checkAns(inx){
    // console.log(`current level:${level}`)
    // let inx=level-1
    if (userSeq[inx]==gameSeq[inx]){
        if(userSeq.length==gameSeq.length){
        console.log("same value!!")
        // localStorage.setItem(gameSeq,JSON.stringify(gameSeq))         
        setTimeout(levelup,1000) 

    }}
    else {
        let h5=document.querySelector("h5");
        let highscore= userSeq.length-1;  
        h5.innerHTML=highscore
        localStorage.setItem("Highscore:",highscore)
        p.innerText =`Game over !! Press any key to Start. Your score:${level-1}`
        started=false;
        level=0;
        gameSeq=[]
        userSeq=[]

    }
 }
function btnpress(){
    // console.log(this)
    let btn=this
    userflash(btn);
    let usercolor=btn.getAttribute("id")
    // console.log(usercolor)
    userSeq.push(usercolor)
    // console.log(userSeq)
    checkAns(userSeq.length-1);
    
}
let btns=document.querySelectorAll(".btn");
for(btn of btns){
btn.addEventListener("click",btnpress)
}
