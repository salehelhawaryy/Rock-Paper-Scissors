
function getComputerChoice() {
    let rand=Math.floor((Math.random()*3)+1);
    if(rand==1)
    return "Rock";
    else {
        if(rand==2) 
         return "Paper";
        return "Scissors";
    }
}


function playRound(player,computer) {
  let playerUse=String(player).toLowerCase();
  let computerUse=String(computer).toLowerCase();
  if(playerUse==computerUse) 
    return "Draw! Both choices were "+playerUse;
  if(playerUse=="paper")
    {
        if(computerUse=="rock")
            return "You Win! Paper Beats Rock";
        return "You Lose! Scissors Beat Paper"; 
    }
  if(playerUse=="rock") 
  {
        if(computerUse=="scissors")
            return "You Win! Rock Beats Scissors";
        return "You Lose! Paper Beats Rock";
  }
  if(computerUse=="paper")
      return "You Win! Scissors Beat Paper";
  return "You Lose! Rock Beats Scissors";
}

function game(playerName){
  let winsPlayer=0;
  let winsComputer=0;
   while(winsPlayer<3 && winsComputer<3)
    {
      let playerSelection= prompt(playerName+" enter your selection");
      let res=playRound(playerSelection,getComputerChoice());
      console.log(res);
      if(res.charAt(4)=='W')
          winsPlayer++;
      if(res.charAt(4)=='L')
          winsComputer++;
    }

  
  if(winsPlayer==3) 
    console.log(playerName+" you won the best of 5 games!")
  else console.log(playerName+ " you lose the best of 5 games :(");
}

let name=prompt("Player, Enter your name");
game(name);

