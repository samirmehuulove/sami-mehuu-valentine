/* PASSWORD */
function checkPass(){

  let pass=document.getElementById("pass").value;

  if(pass==="2523"){

    document.getElementById("lock").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");

    startTyping();

  }else{

    document.getElementById("lockMsg").innerHTML=
    "Wrong code 😜 Try again 💖";

  }
}


/* Typing Effect */
let text="Hey Mehuu 💖";
let i=0;

function startTyping(){

  if(i<text.length){
    document.getElementById("typing").innerHTML+=text.charAt(i);
    i++;
    setTimeout(startTyping,120);
  }
}


/* Yes No Game */
let noSize=18, yesSize=18;

function shrinkNo(){

  let no=document.getElementById("noBtn");
  let yes=document.getElementById("yesBtn");

  noSize-=2;
  yesSize+=4;

  no.style.fontSize=noSize+"px";
  yes.style.fontSize=yesSize+"px";

  document.getElementById("noText").innerHTML=
  "Really baby? Think again 🥺💕";

  if(noSize<8) no.style.display="none";
}


/* Start Love */
function startLove(){

  document.getElementById("game1").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");

  startConfetti();
  startTimer();
  startSlideshow();
}


/* Slideshow */
let pics=["her1.jpg","her2.jpg","together.jpg"];
let p=0;

function startSlideshow(){

  setInterval(()=>{

    document.getElementById("slide").src=pics[p];
    p=(p+1)%pics.length;

  },2500);
}


/* Timer */
function startTimer(){

  let start=new Date("August 1, 2024 00:00:00").getTime();

  setInterval(()=>{

    let now=new Date().getTime();
    let d=now-start;

    let days=Math.floor(d/(1000*60*60*24));
    let hrs=Math.floor((d%(1000*60*60*24))/(1000*60*60));
    let min=Math.floor((d%(1000*60*60))/(1000*60));
    let sec=Math.floor((d%(1000*60))/1000);

    document.getElementById("timer").innerHTML=
    days+" Days "+hrs+"h "+min+"m "+sec+"s ❤️";

  },1000);
}


/* Confetti */
function startConfetti(){

  let c=document.getElementById("confetti");
  let ctx=c.getContext("2d");

  c.width=window.innerWidth;
  c.height=window.innerHeight;

  let pieces=[];

  for(let i=0;i<150;i++){
    pieces.push({
      x:Math.random()*c.width,
      y:Math.random()*c.height,
      r:Math.random()*6+4,
      d:Math.random()*c.height
    });
  }

  function draw(){

    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillStyle="pink";
    ctx.beginPath();

    for(let i=0;i<pieces.length;i++){
      let p=pieces[i];
      ctx.moveTo(p.x,p.y);
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);
    }

    ctx.fill();
    update();
  }

  function update(){

    for(let i=0;i<pieces.length;i++){

      let p=pieces[i];
      p.y+=Math.cos(p.d)+2;

      if(p.y>c.height){
        pieces[i]={
          x:Math.random()*c.width,
          y:0,
          r:p.r,
          d:p.d
        };
      }
    }
  }

  setInterval(draw,30);
}


/* WhatsApp Share */
function shareWhatsApp(){

  let url=window.location.href;

  window.open(
   "https://wa.me/?text="+
   encodeURIComponent(
   "Mehuu ❤️ open this surprise 😘 "+url)
  );
}
