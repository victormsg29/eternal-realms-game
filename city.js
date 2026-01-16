document.addEventListener("DOMContentLoaded", () => {
  const race = localStorage.getItem("race");
  const city = document.querySelector(".city");

  if (!race) {
    window.location.href = "../race.html";
    return;
  }

  const backgrounds = {
    humano: "../images/fondo_humano.webp",
    elfo: "../images/fondo_elfo.webp",
    orco: "../images/fondo_orco.webp"
  };

  city.style.backgroundImage = `url(${backgrounds[race]})`;
});
