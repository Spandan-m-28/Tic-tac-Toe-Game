let boxes = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector(".reset");
const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let turn = true;
let count = 0;
let hiddenBox = document.querySelector(".winner");
let hiddenText = document.querySelector(".winnerText");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn == true) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;

    count++;
    let winner = checkWinner();
    if (winner) {
      hiddenBox.classList.remove("hide");
      hiddenText.innerText = `Winner is ${box.innerText}`;
    } else if (count === 9) {
      draw();
    }
  });
});

const draw = () => {
  hiddenText.innerText = "Draw";
  hiddenBox.classList.remove("hide");
};

function checkWinner() {
  for (let pattern of winningPattern) {
    let box1 = boxes[pattern[0]].innerText;
    let box2 = boxes[pattern[1]].innerText;
    let box3 = boxes[pattern[2]].innerText;
    if (box1 != "" && box2 != "" && box3 != "") {
      if (box1 === box2 && box2 === box3) {
        return true;
      }
    }
  }
  return false;
}

resetBtn.addEventListener("click", () => {
  for (let box of boxes) {
    turn = true;
    count = 0;
    enableBoxes();
    hiddenBox.classList.add("hide");
  }
});

resetBtn.addEventListener("click", () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
  turn = true;
  count = 0;
  hiddenBox.classList.add("hide");
});
