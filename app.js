let progress = 0;
const bar = document.getElementById("progress-bar");

// Duración total ~5 segundos (5000ms)
const duration = 5000;
const steps = 100; // porcentaje
const intervalTime = duration / steps;

const interval = setInterval(() => {
  progress++;
  bar.style.width = progress + "%";

  if (progress >= 100) {
    clearInterval(interval);

    // Revisar si ya hay raza guardada
    const race = localStorage.getItem("race");
    if (race) {
      window.location.href = "city.html";
    } else {
      window.location.href = "welcome.html";
    }
  }
}, intervalTime);
