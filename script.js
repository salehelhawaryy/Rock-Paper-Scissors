
const div=document.querySelector('.res');
const won=document.querySelector('.won');
const lost=document.querySelector('.lost');
const main=document.querySelector('body');

let winsPlayer=0;
let winsComputer=0;


const redo=document.createElement('button');
redo.style.width="100px";
redo.style.height="100px";
redo.textContent="Try Again?";
redo.addEventListener("click", () => {
  winsComputer=0;
  winsPlayer=0;
  won.textContent="Won: "+winsPlayer;
lost.textContent="Lost: "+winsComputer;
  redo.remove();
})

won.textContent="Won: "+winsPlayer;
lost.textContent="Lost: "+winsComputer;

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
  let res="";
  if(playerUse==computerUse) 
    res="Draw! Both choices were "+playerUse;
  else {
    if(playerUse=="paper")
      {
          if(computerUse=="rock")
              res= "You Win! Paper Beats Rock";
          else
          res= "You Lose! Scissors Beat Paper"; 
      }
    if(playerUse=="rock") 
      {
          if(computerUse=="scissors")
              res= "You Win! Rock Beats Scissors";
          else
          res= "You Lose! Paper Beats Rock";
      }
    if(playerUse=="scissors")
      {
        if(computerUse=="paper")
            res="You Win! Scissors Beat Paper"
        else res="You Lose! Rock Beats Scissors"
      } 
      }
  div.textContent=res;

  return res;
}

function game(playerSelection){
  
      //let playerSelection= prompt(playerName+" enter your selection");
      let res=playRound(playerSelection,getComputerChoice());
      console.log(res);
      if(res.charAt(4)=='W')
          winsPlayer++;
      if(res.charAt(4)=='L')
          winsComputer++;
  
  won.textContent="Won: "+winsPlayer;
  lost.textContent="Lost: "+winsComputer;
  if(winsPlayer==3) {
    console.log(" you won the best of 5 games!")
    div.textContent="You won the best of 5 games!"
    main.append(redo);
  }
  if(winsComputer==3){ 
   console.log(" you lost the best of 5 games :(");
  div.textContent="You lost the best of 5 games :(";
   main.append(redo);
  }
}

// let name=prompt("Player, Enter your name");
// game(name);

const btn = document.querySelectorAll("button")

console.log(btn)


btn.forEach ( (button) =>{
  console.log(winsComputer);
  console.log(winsPlayer)
  button.addEventListener("click",() =>  game(button.innerHTML))
 
})



