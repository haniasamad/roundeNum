let randomNum = Math.random()
let roundNum = Math.round((randomNum * 700000)+ 1)
console.log(roundNum);

let roundedNum = prompt("Guess any Rounded Number")
if(roundNum == roundedNum){
    alert("correct")
}
    else if(roundNum !== roundedNum){
    alert("wrong")
    }
