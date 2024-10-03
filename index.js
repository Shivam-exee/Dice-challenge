//Number1
var randomNumber1 = Math.random();
randomNumber1 = Math.ceil(randomNumber1 * 6);
var randomSource1 = "dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src", randomSource1);
//number2
var randomNumber2 = Math.random();
randomNumber2 = Math.ceil(randomNumber2 * 6);
var randomSource2 = "dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", randomSource2);
//Refresh me change
if (randomNumber1 > randomNumber2 ){
  document.querySelector("h1").innerHTML = "Player 1 Winss 🎲";
}else if (randomNumber1 === randomNumber2 ){
  document.querySelector("h1").innerHTML = "That's a Draw let's roll again ?";
}else{
  document.querySelector("h1").innerHTML = "Player 2 Winss 🎲";
}
