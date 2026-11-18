// Create Stars

const stars = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
  let star = document.createElement("div");

  star.className = "star";

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  star.style.width = Math.random() * 3 + "px";
  star.style.height = star.style.width;

  star.style.animationDelay = Math.random() * 3 + "s";

  stars.appendChild(star);
}

// Floating Hearts

function createHeart() {
  let heart = document.createElement("div");

  heart.className = "floating-heart";

  const hearts = ["❤️", "💕", "💗", "💖", "💘"];

  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 15 + Math.random() * 25 + "px";

  heart.style.animationDuration = 5 + Math.random() * 5 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 500);

// Love Button

const button = document.getElementById("loveButton");

const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.style.display = "block";

  button.innerHTML = "I Love You More ❤️";

  button.disabled = true;

  // Heart Explosion

  for (let i = 0; i < 40; i++) {
    let heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";

    heart.style.fontSize = "25px";
    heart.style.zIndex = "10";

    document.body.appendChild(heart);

    let angle = Math.random() * Math.PI * 2;

    let distance = 100 + Math.random() * 250;

    let x = Math.cos(angle) * distance;
    let y = Math.sin(angle) * distance;

    heart.animate(
      [
        {
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 1,
        },

        {
          transform: `translate(calc(-50% + ${x}px),
                    calc(-50% + ${y}px)) scale(1.5)`,

          opacity: 0,
        },
      ],
      {
        duration: 1500,
        easing: "ease-out",
      }
    );

    setTimeout(() => heart.remove(), 1500);
  }
});
