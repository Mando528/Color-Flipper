const color=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn=document.querySelector("#btn");
const text=document.querySelector("#color");

btn.addEventListener("click",function(){
    let randomHex = "#"
    for(let i=0;i<6;i++){
        let randomNumber = color[getRandomNumber()];
        randomHex+=randomNumber;
    }
    
    text.textContent = randomHex;
    document.body.style.backgroundColor = randomHex;
});

function getRandomNumber(){
    return Math.floor(Math.random()*color.length);
}
