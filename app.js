function scaleGame() {
  const game = document.getElementById("game");

  const scaleX = window.innerWidth / 1080;
  const scaleY = window.innerHeight / 1920;

  const scale = Math.min(scaleX, scaleY);

  game.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", scaleGame);
scaleGame();

/* BARRA DE CARGA */
let progress = 0;
const bar = document.getElementById("progress-bar");

const duration = 5000;
const step = duration / 100;

const interval = setInterval(() => {
  progress++;
  bar.style.width = progress + "%";

  if (progress >= 100) {
    clearInterval(interval);
    const race = localStorage.getItem("race");
    window.location.href = race ? "city.html" : "welcome.html";
  }
}, step);
