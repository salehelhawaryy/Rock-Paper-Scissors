
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


function playerSelection(player,computer) {
  let playerUse=String(player).toLowerCase();
  let computerUse=String(computer).toLowerCase();
  if(playerUse==computerUse) 
    return "Draw! Both choices were "+playerUse;
  if(playerUse=="paper")
    {
        if(computerUser=="rock")
            return "You Win! Paper Beats rock"
    }
}


console.log(getComputerChoice());