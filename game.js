/*
GAME RULES:
The game has 2 players,playing in rounds
In each turn,a player rolls a dice as many times as he wishes.Each result gets addded to his ROUND score
BUT,if the player rolls a 1,all his ROUND score gets lost.After that it's the next player's turn
The player can choose to 'Hold',which means that his Round score gets added to overall score.After that it's the next player's turn
The first player has to reach 100 GLOBAL points to win!!! */



var score,roundScore,activePlayer,gamePlay;
init();

 //console.log(dice);
 //document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+ activePlayer).innerHTML='<em>'+dice+ '</em>'
//var x=document.querySelector('#score-0').textContent;
//console.log(x);

function btn(){
    //Do something here
}
btn();
document.querySelector('.btn-roll').addEventListener('click',function() {
if(gamePlay){
    //1. Random Number
    var dice=Math.floor(Math.random()*6)+1;
    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    //3.Update the Rounded Score IF the rolled number was not 1
    if(dice!==1){
        //Add score
    roundScore+= dice;
    document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }else{
        //Next Player
        activePlayer===0 ? activePlayer=1 : activePlayer=0;
        roundScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
    
    }

}



    
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlay){
              //Add CURRENT score to the global score
             score[activePlayer] += roundScore;




            //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];



             //Check if the player won the game
    if(score[activePlayer] >= 100){
        document.querySelector('#name-'+ activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display ='none';
        document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
        gamePlay=false;
}else{
//Next Player
nextPlayer();
}
    }












});


function nextPlayer(){
    activePlayer===0 ? activePlayer=1 : activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';

}
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    score=[0,0];
    activePlayer=0;
    roundScore=0;
     gamePlay=true;
    document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}












