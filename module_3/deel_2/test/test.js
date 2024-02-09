
function buttonStart() {
    console.log("U hebt op de knop geklikt!");
    if (mijnBody.classList.contains('black')){
        mijnBody.classList.toggle('yellow');
    }
    //pakButton.classList.add('yellow');
    //pakButton.classList.remove('black');
    //console.log("De kleur van de knop is nu: " + pakButton.classList);
    
}
pakButton.addEventListener("click", buttonStart);
