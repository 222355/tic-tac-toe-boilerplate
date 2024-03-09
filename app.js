
const scoreValue = localStorage.getItem("score");
const winner = document.getElementById("score");
winner.textContent = scoreValue;

const play_button = document.getElementById("play-button");

play_button.addEventListener("click",function(){
    window.open('index.html','_self')
})
