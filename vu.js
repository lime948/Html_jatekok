const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let score = 0;
let currentMole = null;
let timer = null;

// Vakond mozgatása
function randomMole() {
  holes.forEach(hole => hole.classList.remove("mole"));

  const randomIndex = Math.floor(Math.random() * holes.length);
  holes[randomIndex].classList.add("mole");
  currentMole = holes[randomIndex].id;
}

// Kattintás
holes.forEach(hole => {
  hole.addEventListener("click", () => {
    if (hole.id === currentMole && timer !== null) {
      score++;
      scoreDisplay.textContent = score;
      currentMole = null;
    }
  });
});

// START gomb
startBtn.addEventListener("click", () => {
  if (timer !== null) return; // már fut
  
  score = 0;
  scoreDisplay.textContent = score;

  timer = setInterval(randomMole, 800);
});

// STOP gomb
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;

  holes.forEach(hole => hole.classList.remove("mole"));
  currentMole = null;

  alert("Játék vége! Pontszám: " + score);
});