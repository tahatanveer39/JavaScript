const IncreaseBtn=document.getElementById("increasebtn");
const DecreaseBtn=document.getElementById("decreasebtn");
const ResetBtn=document.getElementById("resetbtn");
const CountLabel=document.getElementById("count");

let count=0;

IncreaseBtn.onclick=function(){
    count++;
    CountLabel.textContent=count;
}

DecreaseBtn.onclick=function(){
    count--;
    CountLabel.textContent=count;
}

ResetBtn.onclick=function(){
    count=0;
    CountLabel.textContent=count;
}