"use strict";
const inputNumber = document.querySelector(".js__inputNumber");
const inputText = document.querySelector(".js__inputText");
const inputTry = document.querySelector(".js__inputTry");
const button = document.querySelector(".js__button");

function getRandomNumber(max) {
  return parseInt(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function guess() {
  const userTry = parseInt(inputNumber.value);
  if (userTry < 1 || userTry > 100) {
    inputText.value = "El número debe estar entre 1 y 100";
  } else if (userTry > randomNumber) {
    inputText.value = "Demadiado alto";
  } else if (userTry < randomNumber) {
    inputText.value = "Demasiado bajo";
  } else {
    inputText.value = "¡Has ganado campeona!";
  }
}
let count = 0;
button.addEventListener("click", function () {
  count++;
  inputTry.value = count;
});

button.addEventListener("click", guess);
