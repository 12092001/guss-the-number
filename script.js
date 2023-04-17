"use script";
/*
console.log(document.querySelector(".message"));
document.querySelector(".message").textContent = "correct Number 🧁";
document.querySelector(".number").textContent = 10;
document.querySelector(".guess").value = 20;
console.log(document.querySelector(".guess").value);
*/

/*
function greeting(){
    console.log("hello world");
    console.log(document.querySelector(".guess").value);
}

document.querySelector(".check").addEventListener("click", greeting);
 
//! or
*/

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".score").textContent = score;

function displayMessage(msg){
    document.querySelector(".message").textContent = msg;
}


document.querySelector(".check").addEventListener("click", function (){

    const guess = Number(document.querySelector(".guess").value);
    
    if(guess === 0){
        displayMessage("No  Number 🌵")
        // document.querySelector(".message").textContent = "No  Number 🌵";
    }else if (guess === randomNumber){
        // if guessed number is equal ta a randomNumber
        document.querySelector(".number").textContent =randomNumber;
        displayMessage("correct Number 🌹")

        // document.querySelector(".message").textContent = "correct Number 🌹";
        document.querySelector("body").style.backgroundColor = "green";

        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }


    }else if(guess !== randomNumber){
        if(score > 1){
            // document.querySelector(".message").textContent = "Too high 🌶";
            displayMessage(guess > randomNumber ? "Too high 🌶" :  "Too Low 😰" );
    
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            // document.querySelector(".message").textContent = "Lost the Game 😭";
            displayMessage("Lost the Game 😭")
            document.querySelector(".score").textContent  = 0;
            document.querySelector("body").style.backgroundColor = "red";
        }
    }
    // else if (guess > randomNumber){
    //     if(score > 1){
    //     document.querySelector(".message").textContent = "Too high 🌶";

    //     score--;
    //     document.querySelector(".score").textContent = score;
    // }else{
    //     document.querySelector(".message").textContent = "Lost the Game 😭";
    //     document.querySelector(".score").textContent  = 0;
    //     document.querySelector("body").style.backgroundColor = "red";
    // }
    // }else if(guess < randomNumber){
    //     if(score > 1){
    //         document.querySelector(".message").textContent = "Too Low 😰";
    
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     }else{
    //         document.querySelector(".message").textContent = "Lost the Game 😭";
    //         document.querySelector(".score").textContent  = 0;
    //         document.querySelector("body").style.backgroundColor = "red";
    //     }

    // }
    });

    document.querySelector(".restart").addEventListener("click", function() {
     score = 20;
      randomNumber = Math.trunc(Math.random() * 20 + 1);   


document.querySelector(".number").textContent = "?";
document.querySelector(".guess").value = "";
document.querySelector(".score").textContent = 20;
// document.querySelector(".message").textContent = "start guessing...";
displayMessage("Start Guessing....")

document.querySelector("body").style.backgroundColor = "#111";

});

// ! other html page
/*
document.querySelector(".btn").addEventListener("click", () => {
    if(document.querySelector(".demo-heading").classList.contains("remove")){
        (document.querySelector(".demo-heading").classList.remove("remove"))
    }else{
        (document.querySelector(".demo-heading").classList.add("remove"))
    }
});
  */  

document.querySelector(".show-modal").addEventListener("click",() => {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".background").classList.remove("hidden");
});
document.querySelector(".close-modal").addEventListener("click",() => {
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".background").classList.add("hidden");
});

document.querySelector(".background").addEventListener("click",() => {
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".background").classList.add("hidden");
});
