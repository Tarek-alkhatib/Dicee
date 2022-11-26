document.query


function results(){
  var player1result = diceNumber();
  var player2result=diceNumber();
document.querySelector("#diceimage1").setAttribute("src","Images/dice"+player1result+".png");
document.querySelector("#diceimage2").setAttribute("src","Images/dice"+player2result+".png");
if(player1result>player2result){
  document.querySelector("h1").innerHTML="Player One Wins!🚩";
}else{
  if(player1result<player2result)
  {
    document.querySelector("h1").innerHTML="Player Two Wins!🚩";
  }else{
    document.querySelector("h1").innerHTML="Draw!";
  }
}
}


function diceNumber(){
  var result=(Math.floor( Math.random()*6))+1;
  return result;
}
