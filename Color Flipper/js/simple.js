const color=["red","white","blue","green","grey","lightgrey"
,"darkgrey","aqua","cyan","yellow","orange","brown","darkblue"];

const btn=document.querySelector("#btn");
const text=document.querySelector("#color");

btn.addEventListener("click",function(){
    let randomNumber = color[getRandomNumber()];

    text.textContent = randomNumber;
    document.body.style.backgroundColor = randomNumber;
});

function getRandomNumber(){
    return Math.floor(Math.random()*color.length);
}
