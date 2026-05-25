const game = document.getElementById("game");
const player = document.getElementById("player");
const exit = document.getElementById("exit");
const winScreen = document.getElementById("winScreen");

const tile = 40;

const map = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,0,1],
    [1,0,1,0,1,0,1,1,0,1],
    [1,0,1,0,0,0,1,0,0,1],
    [1,0,1,1,1,0,1,1,1,1],
    [1,0,0,0,1,0,0,0,0,1],
    [1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,1,1],
    [1,0,0,0,1,0,0,0,0,1],
    [1,1,1,0,1,0,1,1,0,1],
    [1,1,1,1,1,1,1,1,1,1],
];

let px = 1;
let py = 1;

function drawMaze() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === 1) {
        const wall = document.createElement("div");
        wall.classList.add("wall");
        wall.style.width = tile + "px";
        wall.style.height = tile + "px";
        wall.style.left = x * tile + "px";
        wall.style.top = y * tile + "px";
        game.appendChild(wall);
      }
    }
  }

  exit.style.left = 8 * tile + "px";
  exit.style.top = 10 * tile + "px";
}

drawMaze();

function spawnPlayer() {
  player.style.left = px * tile + "px";
  player.style.top = py * tile + "px";
}
spawnPlayer();

function move(dir) {
  let nx = px;
  let ny = py;

  if (dir === "up") ny--;
  if (dir === "down") ny++;
  if (dir === "left") nx--;
  if (dir === "right") nx++;

  if (map[ny][nx] === 1) return;

  px = nx;
  py = ny;

  player.style.left = px * tile + "px";
  player.style.top = py * tile + "px";

  checkWin();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") move("up");
  if (e.key === "ArrowDown") move("down");
  if (e.key === "ArrowLeft") move("left");
  if (e.key === "ArrowRight") move("right");
});

let sx = 0, sy = 0;

document.addEventListener("touchstart", (e) => {
  sx = e.touches[0].clientX;
  sy = e.touches[0].clientY;
});

document.addEventListener("touchend", (e) => {
  let dx = e.changedTouches[0].clientX - sx;
  let dy = e.changedTouches[0].clientY - sy;

  if (Math.abs(dx) > Math.abs(dy)) {
    dx > 0 ? move("right") : move("left");
  } else {
    dy > 0 ? move("down") : move("up");
  }
});

function checkWin() {
  if (px === 8 && py === 10) {
    winScreen.style.display = "flex";
  }
}