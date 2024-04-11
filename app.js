let gamesq=[];
let usesq=[];
let level=0;
let highest=0;
let Started=false;
let color=["yellow","red","green","purple"];
let first=false;

let h3=document.querySelector("h3");
let h1=document.querySelector("h1");

document.addEventListener("keypress",function(){
    if(Started==false){
        console.log("Game Started");
        Started=true;
    }
    levelup();
})
function falshcolor(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelup(){
    usesq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let rndindex=Math.floor(Math.random()*4);
    let rndcolor=color[rndindex];
    let rndbtn=document.querySelector(`.${rndcolor}`);
    gamesq.push(rndcolor);
    falshcolor(rndbtn);
}
function check(idx){
    if(usesq[idx]==gamesq[idx]){
        if(usesq.length==gamesq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        highest=Math.max(highest,level);
        h3.innerHTML=`Game Over. <b>your score is ${level}</b><br>Press any key to start.`;
        if(first==false){
            h=document.createElement("h4");
            h.innerText=`Highest Score = ${highest}`;
            h1=document.querySelector("h1");
            h1.appendChild(h);
            first=true;
        }
        else{
            h=document.querySelector("h4");
            h.innerText=`Highest Score = ${highest}`;
        }
        reset();
    }
}
function btnpress(){
    let btn=this;
    falshcolor(btn);
    usercolor=btn.getAttribute("id");
    usesq.push(usercolor);

    check(usesq.length-1);
}

btns=document.querySelectorAll(".btn");
for(b of btns){
    b.addEventListener("click",btnpress);
}

function reset(){
    level=0;
    gamesq=[];
    usesq=[];
    Started=false;
}