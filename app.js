document.addEventListener("DOMContentLoaded", () => {
  let progress = 0;
  const bar = document.getElementById("progress-bar");

  const duration = 5000; // 5 segundos
  const stepTime = duration / 100; // tiempo por cada 1%

  const interval = setInterval(() => {
    progress++;
    bar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);

      // Redirigir según si el usuario ya eligió raza
      const race = localStorage.getItem("race");
      window.location.href = race ? "city.html" : "welcome.html";
    }
  }, stepTime);
});
