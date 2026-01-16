function fixViewport() {
  const vh = window.visualViewport
    ? window.visualViewport.height
    : window.innerHeight;

  document.documentElement.style.height = vh + "px";
  document.body.style.height = vh + "px";
}

fixViewport();
window.addEventListener("resize", fixViewport);

let progress = 0;
const bar = document.getElementById("progress-bar");

const duration = 5000; // 5 segundos
const intervalTime = duration / 100;

const interval = setInterval(() => {
  progress++;
  bar.style.width = progress + "%";

  if (progress >= 100) {
    clearInterval(interval);

    const race = localStorage.getItem("race");
    if (race) {
      window.location.href = "city.html";
    } else {
      window.location.href = "welcome.html";
    }
  }
}, intervalTime);
