/* PASSWORD */
function checkPass() {
  let pass = document.getElementById("pass").value;

  if (pass === "2523") {
    document.getElementById("lock").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
    startTyping();
    startTimer();
  } else {
    document.getElementById("lockMsg").innerText = "❌ Wrong Code!";
  }
}

/* TYPING EFFECT */
let text = "Hey Mehuu 💖";
let i = 0;

function startTyping() {
  let typing = document.getElementById("typing");

  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(startTyping, 120);
  }
}

/* NO BUTTON SHRINK */
let noSize = 1;

function shrinkNo() {
  let noBtn = document.getElementById("noBtn");
  let yesBtn = document.getElementById("yesBtn");
  let msg = document.getElementById("noText");

  noSize -= 0.1;

  if (noSize < 0.3) {
    msg.innerText = "Come on baby 😘 Say YES 💖";
  } else {
    msg.innerText = "Really? 😢 Think again...";
  }

  noBtn.style.transform = `scale(${noSize})`;
  yesBtn.style.transform = `scale(${1 + (1 - noSize)})`;
}

/* YES CLICK */
function startLove() {
  document.getElementById("game1").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
  startConfetti();
}

/* TIMER */
let startDate = new Date("2024-01-01"); // CHANGE if needed

function startTimer() {
  setInterval(() => {
    let now = new Date();
    let diff = now - startDate;

    let days = Math.floor(diff / (1000*60*60*24));
    let hours = Math.floor(diff / (1000*60*60) % 24);
    let mins = Math.floor(diff / (1000*60) % 60);

    document.getElementById("timer").innerText =
      `${days} Days ${hours} Hours ${mins} Minutes ❤️`;
  }, 1000);
}

/* SLIDESHOW */
let pics = ["her1.jpg","her2.jpg","her3.jpg","her4.jpg"];
let picIndex = 0;

setInterval(() => {
  let slide = document.getElementById("slide");

  if (slide) {
    picIndex = (picIndex + 1) % pics.length;
    slide.src = pics[picIndex];
  }
}, 3000);

/* CONFETTI */
function startConfetti() {
  let canvas = document.getElementById("confetti");
  let ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];

  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: Math.random()*6+2,
      d: Math.random()*canvas.height,
      color: `hsl(${Math.random()*360},100%,70%)`
    });
  }

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    pieces.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    });

    update();
  }

  function update() {
    pieces.forEach(p => {
      p.y += Math.random()*3+1;

      if (p.y > canvas.height) {
        p.y = 0;
        p.x = Math.random()*canvas.width;
      }
    });
  }

  setInterval(draw, 20);
}

/* WHATSAPP SHARE */
function shareWhatsApp() {
  let msg = "Hey 💖 Look what Samir made for Mehuu 😘❤️";
  let url = window.location.href;

  window.open(
    `https://wa.me/?text=${encodeURIComponent(msg + " " + url)}`,
    "_blank"
  );
}
