// let player = JSON.parse(localStorage.player);
// let table = JSON.parse(localStorage.table);
// if (player === null || player === null) {
// } else {
player = {
  line: 1,
  column: 1,
};

table = new Array(6);
for (let i = 0; i < 6; i++) {
  table[i] = new Array(3);
}
// localStorage.setItem("player", JSON.stringify(player));
// localStorage.setItem("table", JSON.stringify(table));
// }

let calcul = "";

let keys = document.querySelectorAll(".keys");
const answer = (document.getElementById("answer").textContent = Math.floor(
  Math.random() * 900 + 100
));

randomFactor = () => {
  for (i = 0; i < 6; i++) {
    const classnumber = document.querySelector(`.keys-${i}`);
    classnumber.textContent = Math.floor(Math.random() * 10 + 1);
  }
};

randomFactor();

keys.forEach((key) => {
  console.log(key.textContent);
  key.addEventListener("click", (e) => {
    let cell = document.querySelector(`.cell-${player.line}-${player.column}`);
    cell.textContent = e.target.textContent;
    table[player.line - 1][player.column - 1] = e.target.textContent;
    if (player.column < 3) player.column++;
  });
});

equal.addEventListener("click", () => {
  for (i = 0; i < 3; i++) {
    calcul += table[player.line - 1][i];
  }
  let answerCalcul = document.querySelector(`.cell-${player.line}-5`);
  console.log(calcul);
  calcul = eval(calcul);
  table[player.line - 1][player.column] = calcul;
  console.log(table[player.line - 1]);
  answerCalcul.textContent = calcul;
  answerCalcul.classList.add("keys-css");
  answerCalcul.classList.remove("first-line");
  answerCalcul.classList.remove("cell");
  if (calcul === answer) {
    const correctAnswer = document.querySelector(".textAnswer");
    correctAnswer.classList.add("correctAnswer");
  } else {
    calcul = "";
    player.column = 1;
    player.line++;
  }
});

del.addEventListener("click", () => {
  if (player.column >= 1) {
    document.querySelector(
      `.cell-${player.line}-${player.column}`
    ).textContent = "";
    if (player.column > 1) player.column--;
  }
});
