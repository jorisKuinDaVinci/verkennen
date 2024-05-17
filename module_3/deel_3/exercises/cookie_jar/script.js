let container = document.getElementById('container');

function create_button(soortknop){
    // creeer een standaard button element
    const knop = document.createElement('button');
    knop.type = 'button';
    knop.textContent = soortknop
    // maak een switch of if statement die de specifieke elementen van een button zet
    switch(soortknop){
        case 'add':
            knop.textContent = 'vul met cookies';
            knop.addEventListener('click', proccess_addcookies_click);
            break;
        case 'take':
            knop.textContent = 'pak een cookie';
            knop.addEventListener('click', proccess_addcookies_click);
            break;
        case 'place':
            knop.textContent = 'plaats deksel';
            knop.addEventListener('click', proccess_addcookies_click);
            break;
        default:
            console.log('.');
    }
    // return het button element
    return knop;
}

function proccess_takecookie_click(){ 
    let jar; //vul deze variable met het element cookie-jar

    // maak een if statement die kijkt hoeveel cookies er nog zijn
    // bij 1 cookie wordt de vraag gesteld: 'Weet u het zeker om de laatste te pakken?'
    // bij 0 wordt de melding gegeven: 'Geen cookies meer' 

    // als er een cookie gepakt is moet je hier de bovenste verwijderen
}

function proccess_addcookies_click() {
    let jar; //vul deze variable met het element cookie-jar
    let currentcookies; // vul deze variablelen met het huidige aantal cookies in de jar 

    let repeat = true;
    while (repeat){
        // vraag hoeveel cookies iemand wil toevoegen
        
        // reken uit hoeveel cookies het totaal zou worden

        repeat; // vul deze variablen met een boolean die true is als het aantal gevraagde cookies + aantal toegevoegde cookies groter is dan 7

        if (repeat) {
            // geef hier het bericht naar de gebruiker aan wat het maximale aantal cookies is dat ingevuld mocht worden.
        }
    }

    // creeer het aantal gevraagde cookies met een for loop, let wel op dat je deze steeds bovenop plaatst
}

function proccess_placelit_click() {
    // verwijder de controls

    let lit;  //vul deze variable met het element jar-lit
    
    // voeg de class closed toe aan de lit

    // set de onclick
    lit.onclick = function () {
        this.classList.remove('closed');
        this.onclick = null;
        build_controlls();
    }
}

// zorg dat het nummer van iedere cookie wordt weergegeven
function create_cookie(){
    const cookie = document.createElement('div');
    cookie.classList.add('cookie');
    cookie.innerHTML = 'Cookie';

    return cookie;
}

function build_controlls() {
    // maak een array met de 3 verschillende buttons
    const controlList = [create_button('add'), create_button('take'), create_button('place')];
    console.log(controlList);
    // genereer een div element met het id controls
    const controls = document.createElement('div');
    controls.id = 'controls';
    // loop door de array met buttons
    // voeg vervolgens na het aanroepen vann de functie de button aan de controls toe
    controlList.forEach(b => {
        //console.log(b);
        controls.appendChild(b)
    });
    // voeg de controls toe aan de container
    container.appendChild(controls);
}

build_controlls()