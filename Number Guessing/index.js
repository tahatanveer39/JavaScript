
const min=1;
const max=100;
const answer=Math.floor(Math.random()*(max-min)+min);

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt("Guess the number between 1-100");
    guess=Number(guess);

    if(isNaN(guess) || guess>100 || guess<1 )
    {
        window.alert("Please enter a valid number");
    }
    else
    {
        attempts++;

        if(guess<answer)
        {
            window.alert("Too low! Try Again");
        }
        else if(guess>answer)
        {
            window.alert("Too high! Try Again");
        }
        else
        {
            window.alert(`Correct! The answer was ${guess}. It took you ${attempts} attempts`);
            running=false;
        }
    }

   
}