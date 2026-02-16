function checkPassword(){
if(document.getElementById("password").value==="0322"){
document.getElementById("loginScreen").style.display="none";
document.getElementById("mainContent").style.display="block";
document.getElementById("bgMusic").play();
startTyping();
calculateDays();
startStars();
startHearts();
}
}

function toggleMode(){document.body.classList.toggle("light");}
function valentineMode(){document.body.classList.toggle("valentine");}

const text="შენ ხარ ჩემი ყველაზე ლამაზი ისტორია...";
let i=0;
function startTyping(){
function type(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;setTimeout(type,60);
}}
type();
}

function calculateDays(){
const startDate=new Date("2024-01-01");
const today=new Date();
const diff=Math.floor((today-startDate)/(1000*60*60*24));
document.getElementById("daysTogether").innerText=diff+" დღე ❤️";
}

function startStars(){
const c=document.getElementById("stars");
const ctx=c.getContext("2d");
c.width=window.innerWidth;
c.height=window.innerHeight;
let stars=[];
for(let i=0;i<200;i++){
stars.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2});
}
function draw(){
ctx.clearRect(0,0,c.width,c.height);
ctx.fillStyle="white";
stars.forEach(s=>{ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();});
requestAnimationFrame(draw);
}
draw();
}

function startHearts(){
const c=document.getElementById("hearts");
const ctx=c.getContext("2d");
c.width=window.innerWidth;
c.height=window.innerHeight;
let hearts=[];
for(let i=0;i<40;i++){
hearts.push({x:Math.random()*c.width,y:Math.random()*c.height,s:20,sp:1+Math.random()*2});
}
function draw(){
ctx.clearRect(0,0,c.width,c.height);
ctx.fillStyle="rgba(255,0,100,0.7)";
hearts.forEach(h=>{
ctx.font=h.s+"px Arial";
ctx.fillText("❤",h.x,h.y);
h.y+=h.sp;
if(h.y>c.height)h.y=0;
});
requestAnimationFrame(draw);
}
draw();
}

function launchSurprise(){
const c=document.getElementById("fireworks");
const ctx=c.getContext("2d");
c.width=window.innerWidth;
c.height=window.innerHeight;
let p=[];
for(let i=0;i<150;i++){
p.push({x:c.width/2,y:c.height/2,vx:(Math.random()-0.5)*8,vy:(Math.random()-0.5)*8,a:1});
}
function anim(){
ctx.clearRect(0,0,c.width,c.height);
p.forEach(o=>{
o.x+=o.vx;o.y+=o.vy;o.a-=0.01;
ctx.fillStyle=`rgba(255,${Math.random()*255},150,${o.a})`;
ctx.beginPath();ctx.arc(o.x,o.y,4,0,Math.PI*2);ctx.fill();
});
p=p.filter(o=>o.a>0);
if(p.length>0)requestAnimationFrame(anim);
}
anim();
}

function showRing(){
document.getElementById("ringBox").style.display="block";
}

document.getElementById("secretTrigger").addEventListener("click",()=>{
document.getElementById("secretMessage").style.display="block";
});

function quizAnswer(){
document.getElementById("quizResult").innerText="სწორი პასუხია: ყოველთვის მე ❤️";
}

let score=0;
function scorePoint(){
score++;
document.getElementById("score").innerText=score;
}
