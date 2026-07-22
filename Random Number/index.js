
const RollBtn=document.getElementById("RollBtn");
const myLabel=document.getElementById("myLabel");
const min=1;
const max=6;
let random;

RollBtn.onclick=function(){
    random=Math.floor(Math.random()*max)+min;
    myLabel.textContent=random;
}