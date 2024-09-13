var pics = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

var randNum1 = Math.random();
randNum1 = Math.floor(randNum1 * pics.length) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/" + "dice" + randNum1 + ".png");

var randNum2 = Math.random();
randNum2 = Math.floor(randNum2 * pics.length) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/" + "dice" + randNum2 + ".png");

if (randNum1 > randNum2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randNum1 < randNum2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}