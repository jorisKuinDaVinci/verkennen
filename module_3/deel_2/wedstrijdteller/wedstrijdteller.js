inputTeams = document.getElementById('input-teams');

game =
{
    team1Punten: 0,
    team2Punten: 1,
    serving:0   
} 

inputTeam1.value = '...'; // testdata
inputTeam2.value = '...'; // testdata

function updateScreen(){
    // maak juiste button geel!
    if (game.serving == 1) {
        counterTeam1.classList.add('serving');
        counterTeam2.classList.remove('serving');
    } else {
        counterTeam2.classList.add('serving');
        counterTeam1.classList.remove('serving');
    }
}    

function start(event){
    console.log('You pressed start!');
    if (nameTeam1.innerText == '...' || nameTeam2.innerText == '...') {
        alert('Er mist een naam!');
        return;
    };
    //
    console.dir(servingTeam1);
    if (!servingTeam1.checked && !servingTeam2.checked) {
        alert('Wie moet er beginnen?');
        return;
    };

    // hide inputfields
    input_teams.style.display = 'none';
    // activate serving
    counterTeam1.classList.add('serving');

    game.serving = 2;
    if (servingTeam2.checked) {
        game.serving = 1;
    };

    updateScreen();

}
startButton.addEventListener('click',start);

function count(event){
}
counterTeam1.addEventListener('click',count);
counterTeam2.addEventListener('click',count);

function displayNames(event){
    nameTeam1.innerText = inputTeam1.value;
    nameTeam2.innerText = inputTeam2.value;

}
inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);