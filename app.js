let progress = 0;
const bar = document.getElementById("progress-bar");

const interval = setInterval(() => {
  progress += 5;
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
}, 200);
