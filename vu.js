const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let score = 0;
let currentMole = null;
let timer = null;

stopBtn.classList.add("hidden")

function randomMole() {
  holes.forEach(hole => hole.classList.remove("mole"));

  const randomIndex = Math.floor(Math.random() * holes.length);
  holes[randomIndex].classList.add("mole");
  currentMole = holes[randomIndex].id;
}

holes.forEach(hole => {
  hole.addEventListener("click", () => {
    if (hole.id === currentMole && timer !== null) {
      score++;
      scoreDisplay.textContent = score;
      currentMole = null;
    }
  });
});

startBtn.addEventListener("click", () => {
  if (timer !== null) return;
  startBtn.classList.add("hidden")
  stopBtn.classList.remove("hidden")
  
  score = 0;
  scoreDisplay.textContent = score;

  timer = setInterval(randomMole, 800);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  startBtn.classList.remove("hidden")
  stopBtn.classList.add("hidden")

  holes.forEach(hole => hole.classList.remove("mole"));
  currentMole = null;

  alert("Játék vége! Pontszám: " + score);
});