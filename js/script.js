"use strict";
let secondi = 0;
let sec = 0;
let minuti = 0;
let display = '';
let interval;
let credi;
function stampa(num) {
    let schermo = document.querySelector('.chiamata input[name="numero-chiamata"]');
    display += num;
    schermo.value = display;
    schermo.innerHTML = display;
}
function svuota() {
    display = '';
    let s = document.querySelector('#canc');
    if (s !== null) {
        s.value = display;
        s.innerHTML = display;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let login = document.querySelector('.login-utente input');
    let logOk = document.querySelector('.login-utente');
    let phone = document.querySelector('.phone');
    let ric = document.querySelector('.ricarica');
    let utlogg = document.querySelector('.log-utente input[name="utente-loggato"]');
    let btnLogout = document.querySelector('.log-utente input[name="logout"]');
    btnLogout.addEventListener('click', logout);
    let btnLogin = document.querySelector('.login-utente button');
    btnLogin === null || btnLogin === void 0 ? void 0 : btnLogin.addEventListener('click', loginApp);
    let ricUno = document.querySelector('.user1 input[name="creditoUno"]');
    let ricDue = document.querySelector('.user2 input[name="creditoDue"]');
    let ricTre = document.querySelector('.user3 input[name="creditoTre"]');
    let dieci = document.querySelector('.ricarica input[name="dieci"]');
    dieci.addEventListener('click', ricaricaDieci);
    let venti = document.querySelector('.ricarica input[name="venti"]');
    venti.addEventListener('click', ricaricaVenti);
    let cinquanta = document.querySelector('.ricarica input[name="cinquanta"]');
    cinquanta.addEventListener('click', ricaricaCinquanta);
    let chiama = document.querySelector('.bi-telephone-outbound-fill');
    chiama === null || chiama === void 0 ? void 0 : chiama.addEventListener('click', chiamata);
    let termina = document.querySelector('.termina');
    termina.addEventListener('click', min);
    let nChiamUno = document.querySelector('.user1 input[name="nChiamate"]');
    let nChiamDue = document.querySelector('.user2 input[name="nChiamate"]');
    let nChiamTre = document.querySelector('.user3 input[name="nChiamate"]');
    let azzeraUno = document.querySelector('.user1 input[name="azzeraUno"]');
    azzeraUno === null || azzeraUno === void 0 ? void 0 : azzeraUno.addEventListener('click', azzeraU);
    let azzeraDue = document.querySelector('.user2 input[name="azzeraDue"]');
    azzeraDue === null || azzeraDue === void 0 ? void 0 : azzeraDue.addEventListener('click', azzeraD);
    let azzeraTre = document.querySelector('.user3 input[name="azzeraTre"]');
    azzeraTre === null || azzeraTre === void 0 ? void 0 : azzeraTre.addEventListener('click', azzeraT);
    let faiRicarica = document.querySelector('.faiRicarica');
    let ora = document.querySelector('.ora p');
    let bg = document.querySelector('.telefono-schermo');
    let schermo = document.querySelector('#canc');
    credi = setInterval(orario, 1000);
    // ----------- FUNZIONI LOGIN/LOGOUT ------------
    function loginApp() {
        if (+login.value === userUno.pin || +login.value === userDue.pin || +login.value === userTre.pin) {
            logOk.style.display = "none";
            phone.style.display = "flex";
            ric.style.display = "initial";
            bg.style.backgroundImage = "none";
            ora.style.display = "none";
            if (utlogg !== null) {
                utlogg.value = login.value;
            }
        }
        else {
            alert('pin errato');
        }
    }
    function logout() {
        ric.style.display = "none";
        phone.style.display = "none";
        logOk.style.display = "initial";
        bg.style.backgroundImage = "url(../images/sfondo.png)";
        ora.style.display = "block";
    }
    // ------------- FUNZIONI RICARICHE ------------- 
    function ricaricaDieci() {
        faiRicarica.style.display = 'none';
        if (+utlogg.value == userUno.pin) {
            userUno.ricarica(10);
            ricUno.value = `${userUno.credito}`;
        }
        else if (+utlogg.value == userDue.pin) {
            userDue.ricarica(10);
            ricDue.value = `${userDue.credito}`;
        }
        else {
            userTre.ricarica(10);
            ricTre.value = `${userTre.credito}`;
        }
        console.log(userUno);
        console.log(userDue);
        console.log(userTre);
    }
    function ricaricaVenti() {
        faiRicarica.style.display = 'none';
        if (+utlogg.value == userUno.pin) {
            userUno.ricarica(20);
            ricUno.value = `${userUno.credito}`;
        }
        else if (+utlogg.value == userDue.pin) {
            userDue.ricarica(20);
            ricDue.value = `${userDue.credito}`;
        }
        else {
            userTre.ricarica(20);
            ricTre.value = `${userTre.credito}`;
        }
    }
    function ricaricaCinquanta() {
        faiRicarica.style.display = 'none';
        if (+utlogg.value == userUno.pin) {
            userUno.ricarica(50);
            ricUno.value = `${userUno.credito}`;
        }
        else if (+utlogg.value == userDue.pin) {
            userDue.ricarica(50);
            ricDue.value = `${userDue.credito}`;
        }
        else {
            userTre.ricarica(50);
            ricTre.value = `${userTre.credito}`;
        }
    }
    function chiamata() {
        if (+utlogg.value == userUno.pin) {
            userUno.chiamata();
            ricUno.value = `${userUno.credito}`; // stampa credito aggiornato 
            nChiamUno.value = `${userUno.numeroChiamate}`; //stampa numero chiamate 
        }
        if (+utlogg.value == userDue.pin) {
            userDue.chiamata();
            ricDue.value = `${userDue.credito}`; // stampa credito aggiornato 
            nChiamDue.value = `${userDue.numeroChiamate}`; //stampa numero chiamate  
        }
        if (+utlogg.value == userTre.pin) {
            userTre.chiamata();
            ricTre.value = `${userTre.credito}`; // stampa credito aggiornato 
            nChiamTre.value = `${userTre.numeroChiamate}`; //stampa numero chiamate  
        }
        num404();
        /*  console.log(userUno);
         console.log(userDue);
         console.log(userTre); */
    }
    function min() {
        clearInterval(interval);
        termina.style.zIndex = '-1';
        secondi = 0;
        minuti = 0;
        printTime();
    }
    function azzeraU() {
        userUno.azzeraChiamate();
        nChiamUno.value = `${userUno.numeroChiamate}`;
        console.log(userUno);
    }
    function azzeraD() {
        userDue.azzeraChiamate();
        nChiamDue.value = `${userDue.numeroChiamate}`;
        console.log(userDue);
    }
    function azzeraT() {
        userTre.azzeraChiamate();
        nChiamTre.value = `${userTre.numeroChiamate}`;
        console.log(userTre);
    }
    class UserSim {
        constructor(credito, user, pin) {
            this.credito = 0;
            this.numeroChiamate = 0;
            this.credito = credito;
            this.pin = pin;
            this.user = user;
        }
        //metodo definito come public void ricarica che ricarica il telefono 
        ricarica(ricarica) {
            this.credito = this.credito + ricarica;
        }
        //metodo chiamata che ogni minuto scala 20cent e incrementa il numero chiamate 
        chiamata() {
            if (this.credito < 0.20) {
                alert('Il tuo credito è terminato, effetua una ricarica!');
                /*  clearInterval(interval) */
            }
            else {
                this.credito -= 0.20;
                /* this.credito = +this.credito.toFixed(2); */
                interval = setInterval(timer, 1000);
                termina.style.zIndex = '1';
                this.numeroChiamate++;
            }
        }
        //metodo che restituisce il credito residuo
        numero404(credito) {
            //alert o popup
            alert(`Grazie per essere nostro cliente! Il suo credito è di ${credito.toFixed(2)} €`);
        }
        //metodo che restituisce il numero delle chiamate
        // scritto il metodo ma non utilizzato, contatore chiamate già presente nel riepilogo sim 
        /*  public getNumeroChiamate(): void {
             alert(`Hai effettuato ${this.numeroChiamate} chiamate`)
         } */
        //metodo che azzera il numero delle chiamate 
        azzeraChiamate() {
            this.numeroChiamate = 0;
        }
    }
    let userUno = new UserSim(0, 'Utente 1', 1234);
    let userDue = new UserSim(0, 'Utente 2', 5678);
    let userTre = new UserSim(0, 'Utente 3', 9123);
    function timer() {
        secondi++;
        if (+utlogg.value == userUno.pin && secondi >= 60) {
            secondi = 0;
            minuti++;
            userUno.credito -= 0.20;
            userUno.credito = +userUno.credito.toFixed(2);
            ricUno.value = `${userUno.credito}`;
        }
        if (+utlogg.value == userDue.pin && secondi >= 60) {
            secondi = 0;
            minuti++;
            userDue.credito -= 0.20;
            userDue.credito = +userDue.credito.toFixed(2);
            ricDue.value = `${userDue.credito}`;
        }
        if (+utlogg.value == userTre.pin && secondi >= 60) {
            secondi = 0;
            minuti++;
            userTre.credito -= 0.20;
            userTre.credito = +userTre.credito.toFixed(2);
            ricTre.value = `${userTre.credito}`;
        }
        printTime();
        credit();
    }
    function credit() {
        if (+utlogg.value == userUno.pin && userUno.credito < 0.20 || +utlogg.value == userDue.pin && userDue.credito < 0.20 || +utlogg.value == userTre.pin && userTre.credito < 0.20) {
            clearInterval(interval);
            secondi = 0;
            minuti = 0;
            termina.style.zIndex = '-1';
            faiRicarica.style.display = 'block';
            printTime();
        }
    }
    function printTime() {
        let stamp = document.querySelector('.chiamata h4');
        if (stamp !== null)
            stamp.innerHTML = `${minuti}:${secondi}`;
    }
    function orario() {
        let date = new Date();
        let o = addZero(date.getHours());
        let m = addZero(date.getMinutes());
        let time = o + ":" + m;
        ora.innerHTML = time;
    }
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    // purtroppo non del tutto funzionante, non ho potuto perfezzionarla per questioni di tempo 
    function num404() {
        if (+utlogg.value == userUno.pin && schermo.value == '404') {
            userUno.numero404(userUno.credito);
            clearInterval(interval);
            termina.style.zIndex = '-1';
            secondi = 0;
            minuti = 0;
            printTime();
        }
        else if (+utlogg.value == userDue.pin && schermo.value == '404') {
            userDue.numero404(userDue.credito);
            clearInterval(interval);
            termina.style.zIndex = '-1';
            secondi = 0;
            minuti = 0;
            printTime();
        }
        else if (+utlogg.value == userTre.pin && schermo.value == '404') {
            userTre.numero404(userDue.credito);
            clearInterval(interval);
            termina.style.zIndex = '-1';
            secondi = 0;
            minuti = 0;
            printTime();
        }
    }
});
