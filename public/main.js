// 'use strict';

const colors = ["green", "red", "purple", "red-orange"]
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
    // get random number between 0 and 3
    const randomNumber = getRandomNumber();
    // console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]; 
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}