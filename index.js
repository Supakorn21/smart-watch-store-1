const blackButton = document.querySelector("#black");
const orangeButton = document.querySelector("#orange");
const purpleButton = document.querySelector("#purple");
const pinkButton = document.querySelector("#pink");
const img = document.querySelector("#img");

blackButton.addEventListener("click", () => {
  img.src = "img/black-watch.png";
});
orangeButton.addEventListener("click", () => {
  img.src = "img/orange-watch.png";
});

purpleButton.addEventListener("click", () => {
  img.src = "img/purple-watch.png";
});

pinkButton.addEventListener("click", () => {
  img.src = "img/pink-watch.png";
});
