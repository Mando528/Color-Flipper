const btn=document.querySelector("#btn");
const text=document.querySelector("#color");

let redColor = "211";
let greenColor = "211";
let blueColor = "211";

btn.addEventListener("click",function(){
    let randomNumber1 = getRandomNumber();
    let randomNumber2 = getRandomNumber();
    let randomNumber3 = getRandomNumber();

    redColor=randomNumber1;
    greenColor=randomNumber2;
    blueColor=randomNumber3;

    let randomRGB = "rgb("+redColor+","+greenColor+","+blueColor+")";
    text.textContent = randomRGB;
    document.body.style.backgroundColor = randomRGB;
});

function getRandomNumber(){
    return Math.floor(Math.random()*360);
}
