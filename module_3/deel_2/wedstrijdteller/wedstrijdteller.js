inputTeams = document.getElementById('input-teams');

inputTeam1.value = '...'; // testdata
inputTeam2.value = '...'; // testdata

function start(event){
}
startButton.addEventListener('click',start);

function count(event){
}
counterTeam1.addEventListener('click',count);
counterTeam2.addEventListener('click',count);

function displayNames(event){
    nameTeam1.innertext = inputTeam1.value;

}
inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);