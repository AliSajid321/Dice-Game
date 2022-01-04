var randomNumber1 = Math.random()*6;
var randomNumber2 = Math.random()*6;

randomNumber1 = Math.floor(randomNumber1) + 1;
randomNumber2 = Math.floor(randomNumber2) + 1;

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
var headline = document.querySelector(".container h1");



image1.setAttribute("src","images/dice" + randomNumber1 + ".png");
image2.setAttribute("src","images/dice" + randomNumber2 + ".png");

if(randomNumber1>randomNumber2){
    headline.innerHTML = "Player 1 Wins";
}

else if (randomNumber1<randomNumber2){
    headline.innerHTML = "Player 2 Wins";
}

else if(randomNumber1===randomNumber2){
    headline.innerHTML = "Draw";
}

// do while(i!==randomNumber1){
//     if(randomNumber1===i){
//         image1.setAttribute("src","images/dice" + randomNumber1 + ".png");
//     }
//     else{
//         i++;
//     }
    
// }

// if(randomNumber1===1){
//     image1.setAttribute("src","images/dice1.png");
// }

// if(randomNumber1===2){
//     image1.setAttribute("src","images/dice2.png");
// }

// if(randomNumber1===3){
//     image1.setAttribute("src","images/dice3.png");
// }

// if(randomNumber1===4){
//     image1.setAttribute("src","images/dice4.png");
// }

// if(randomNumber1===5){
//     image1.setAttribute("src","images/dice5.png");
// }

// if(randomNumber1===6){
//     image1.setAttribute("src","images/dice6.png");
// }

