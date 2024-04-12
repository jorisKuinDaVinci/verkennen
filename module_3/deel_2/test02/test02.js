let teller = 0;
function buttonStart() {
    console.log("U hebt op de knop geklikt!");
    if (mijnBody.classList.contains('black')){
        mijnBody.classList.toggle('yellow');
    }
    teller++;
    console.log("U hebt " + teller + " keer op de knop geklikt!");
    counter.innerText = "aantal clicks: " + teller;
    
}
function buttonmove() {
    pakButton.style.position ='absolute';
    pakButton.style.top = Math.floor(Math.random()*90+5)+'%';
    pakButton.style.left = Math.floor(Math.random()*90+5)+'%';
    pakButton.innerText = "Pak me!";
}
setInterval (buttonmove, 1000);
//sets a random absolute position to a html element; receives the html element
pakButton.addEventListener("click", buttonStart);
