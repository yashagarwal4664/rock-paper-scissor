function  getcomputerChoice()
{
  let choice =["rock","paper","scissors"];
  var index = Math.floor(Math.random() * choice.length);
  return choice[index];

}
function playround(player,comp)
{
  if (player==comp)
  return "tie"
  if (player=="paper" && comp=="scissors")
  return "you lose"
  if (player=="paper" && comp=="rock")
  return "you win"
  if (player=="rock" && comp=="paper")
  return "you lose"
  if (player=="rock" && comp=="scissors")
  return "you win"
  if (player=="scissors" && comp=="paper")
  return "you win"
  if (player=="scissors" && comp=="rock")
  return "you lose"
  

}
const comp=getcomputerChoice();
const player="scissors";

console.log(playround(player,comp));
