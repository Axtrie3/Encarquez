const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");

function teleportButton() {
  const maxX = card.clientWidth - noBtn.clientWidth - 20;
  const maxY = card.clientHeight - noBtn.clientHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", teleportButton);

noBtn.addEventListener("touchstart", teleportButton);

noBtn.addEventListener("click", teleportButton);