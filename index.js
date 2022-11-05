console.log("Loaded Javascript Successfully!");

const button = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function handleClick() {
  console.log("button clicked");
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  console.log(rndCol);
  document.body.style.background = rndCol;
}

button.addEventListener("click", handleClick);

const leftCat = document.getElementById("leftCat");
const rightCat = document.getElementById("rightCat");

function leftCatEnlarge() {
  leftCat.width = "105";
  leftCat.height = "105";
}

function rightCatEnlarge() {
  rightCat.width = "105";
  rightCat.height = "105";
}

function leftCatNormal() {
  leftCat.width = "85";
  leftCat.height = "85";
}

function rightCatNormal() {
  rightCat.width = "85";
  rightCat.height = "85";
}

leftCat.addEventListener("mouseover", leftCatEnlarge);
rightCat.addEventListener("mouseover", rightCatEnlarge);
leftCat.addEventListener("mouseout", leftCatNormal);
rightCat.addEventListener("mouseout", rightCatNormal);
