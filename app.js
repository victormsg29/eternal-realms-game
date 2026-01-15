const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

document.getElementById("startGame").onclick = () => {
  alert("Bienvenido a Eternal Realms");
  console.log(tg.initDataUnsafe.user);
};
