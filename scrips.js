document.addEventListener("DOMContentLoaded", function(){

function checkPassword(){
    const input = document.getElementById("password");
    if(!input) return;

    const pass = input.value.trim();

    if(pass === "0322"){
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";

        const music = document.getElementById("bgMusic");
        if(music){
            music.play().catch(()=>{});
        }

        startTyping();
        calculateDays();
        startStars();
        startHearts();

    } else {
        alert("პაროლი არასწორია 💔");
    }
}

window.checkPassword = checkPassword;


/* დარჩენილი კოდი უცვლელი */

function toggleMode(){document.body.classList.toggle("light");}
window.toggleMode = toggleMode;

function valentineMode(){document.body.classList.toggle("valentine");}
window.valentineMode = valentineMode;

const text="შენ ხარ ჩემი ყველაზე ლამაზი ისტორია...";
let i=0;
function startTyping(){
    i=0;
    document.getElementById("typing").innerHTML="";
    function type(){
        if(i<text.length){
            document.getElementById("typing").innerHTML+=text.charAt(i);
            i++;
            setTimeout(type,60);
        }
    }
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
    if(!c) return;
    const ctx=c.getContext("2d");
    c.width=window.innerWidth;
    c.height=window.innerHeight;
    let stars=[];
    for(let i=0;i<150;i++){
        stars.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2});
    }
    function draw(){
        ctx.clearRect(0,0,c.width,c.height);
        ctx.fillStyle="white";
        stars.forEach(s=>{
            ctx.beginPath();
            ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }
    draw();
}

function startHearts(){
    const c=document.getElementById("hearts");
    if(!c) return;
    const ctx=c.getContext("2d");
    c.width=window.innerWidth;
    c.height=window.innerHeight;
    let hearts=[];
    for(let i=0;i<30;i++){
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

});
