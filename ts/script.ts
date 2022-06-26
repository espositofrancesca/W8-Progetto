

let secondi: number = 0;
let sec: number = 0
let minuti: number = 0;
let display: string = ''
let interval: number
let credi: number



document.addEventListener("DOMContentLoaded", function () {
    let login = <HTMLInputElement>document.querySelector('.login-utente input')
    let logOk = <HTMLInputElement>document.querySelector('.login-utente')
    let phone = <HTMLInputElement>document.querySelector('.phone')
    let ric = <HTMLInputElement>document.querySelector('.ricarica')
    let utlogg = <HTMLInputElement>document.querySelector('.log-utente input[name="utente-loggato"]')
    let btnLogout = <HTMLButtonElement>document.querySelector('.log-utente input[name="logout"]')
    btnLogout.addEventListener('click', logout)

    let btnLogin = document.querySelector('.login-utente button')
    btnLogin?.addEventListener('click', loginApp)

    let ricUno = <HTMLInputElement>document.querySelector('.user1 input[name="creditoUno"]')
    let ricDue = <HTMLInputElement>document.querySelector('.user2 input[name="creditoDue"]')
    let ricTre = <HTMLInputElement>document.querySelector('.user3 input[name="creditoTre"]')

    let dieci = <HTMLInputElement>document.querySelector('.ricarica input[name="dieci"]')
    dieci.addEventListener('click', ricaricaDieci)
    let venti = <HTMLInputElement>document.querySelector('.ricarica input[name="venti"]')
    venti.addEventListener('click', ricaricaVenti)
    let cinquanta = <HTMLInputElement>document.querySelector('.ricarica input[name="cinquanta"]')
    cinquanta.addEventListener('click', ricaricaCinquanta)

    let chiama = <HTMLButtonElement>document.querySelector('.bi-telephone-outbound-fill')
    chiama?.addEventListener('click', chiamata)

    let termina = <HTMLButtonElement>document.querySelector('.termina')
    termina.addEventListener('click', min)
    let cancella = document.querySelector('.bi-arrow-left-square-fill')
    cancella?.addEventListener('click', canc)
    let nChiamUno = <HTMLInputElement>document.querySelector('.user1 input[name="nChiamate"]')
    let nChiamDue = <HTMLInputElement>document.querySelector('.user2 input[name="nChiamate"]')
    let nChiamTre = <HTMLInputElement>document.querySelector('.user3 input[name="nChiamate"]')


    let azzeraUno = <HTMLButtonElement>document.querySelector('.user1 input[name="azzeraUno"]')
    azzeraUno?.addEventListener('click', azzeraU)
    let azzeraDue = <HTMLInputElement>document.querySelector('.user2 input[name="azzeraDue"]')
    azzeraDue?.addEventListener('click', azzeraD)
    let azzeraTre = <HTMLInputElement>document.querySelector('.user3 input[name="azzeraTre"]')
    azzeraTre?.addEventListener('click', azzeraT)

    let faiRicarica = <HTMLElement>document.querySelector('.faiRicarica')
    let ora =  <HTMLElement>document.querySelector('.ora p')
    let bg = <HTMLElement>document.querySelector('.telefono-schermo')
    let schermo = <HTMLInputElement>document.querySelector('.chiamata input[name="numero-chiamata"]')

    
    credi = setInterval(orario, 1000);

    // ----------- FUNZIONI LOGIN/LOGOUT ------------
    function loginApp() {
        if (+login.value === userUno.pin || +login.value === userDue.pin || +login.value === userTre.pin) {
            logOk.style.display = "none";
            phone.style.display = "flex";
            ric.style.display = "initial";
            bg.style.backgroundImage = "none"
            ora.style.display= "none";

            if (utlogg !== null) {
                utlogg.value = login.value;
            }

        } else {
            alert('pin errato')
        }
    }
    function logout() {
        ric.style.display = "none";
        phone.style.display = "none";
        logOk.style.display = "initial";
        bg.style.backgroundImage = "url(../images/sfondo.png)"
        ora.style.display= "block";
        
    }

    // ------------- FUNZIONI RICARICHE ------------- 
    function ricaricaDieci() {
        if (+utlogg.value == userUno.pin) {
            userUno.ricarica(10)
            ricUno.value = `${userUno.credito}`
            faiRicarica.style.display = 'none';

        } else if (+utlogg.value == userDue.pin) {
            userDue.ricarica(10)
            ricDue.value = `${userDue.credito}`
            faiRicarica.style.display = 'none';
        } else {
            userTre.ricarica(10)
            ricTre.value = `${userTre.credito}`
            faiRicarica.style.display = 'none';
        }
        console.log(userUno);
        console.log(userDue);

        console.log(userTre);
    
    }
    function ricaricaVenti() {
        if (+utlogg.value == userUno.pin) {
            userUno.ricarica(20)
            ricUno.value = `${userUno.credito}`
            console.log(userUno);
            console.log(userDue)
        } else if (+utlogg.value == userDue.pin) {
            userDue.ricarica(20)
            ricDue.value = `${userDue.credito}`
        } else {
            userTre.ricarica(20)
            ricTre.value = `${userTre.credito}`
        }
    }
    function ricaricaCinquanta() {
        if (+utlogg.value == userUno.pin) {
            userUno.ricarica(50)
            ricUno.value = `${userUno.credito}`
        }
        else if (+utlogg.value == userDue.pin) {
            userDue.ricarica(50)
            ricDue.value = `${userDue.credito}`
        } else {
            userTre.ricarica(50)
            ricTre.value = `${userTre.credito}`
        }
    }

    function chiamata() {
        if (+utlogg.value == userUno.pin) {
            userUno.chiamata()
            ricUno.value = `${userUno.credito}` // stampa credito aggiornato 
            nChiamUno.value = `${userUno.numeroChiamate}` //stampa numero chiamate 
        }
        if (+utlogg.value == userDue.pin) {
            userDue.chiamata()
            ricDue.value = `${userDue.credito}` // stampa credito aggiornato 
            nChiamDue.value = `${userDue.numeroChiamate}` //stampa numero chiamate  
        }
        if (+utlogg.value == userTre.pin) {
            userTre.chiamata()
            ricTre.value = `${userTre.credito}` // stampa credito aggiornato 
            nChiamTre.value = `${userTre.numeroChiamate}` //stampa numero chiamate  
        }

       /*  console.log(userUno);
        console.log(userDue);
        console.log(userTre); */
    }

    function min() {

        clearInterval(interval)
        termina.style.zIndex = '-1';
        secondi = 0;
        minuti = 0;
        printTime()
    }


    function azzeraU(){
        userUno.azzeraChiamate()
        nChiamUno.value = `${userUno.numeroChiamate}`
        console.log(userUno);
    }

    function azzeraD(){
        userDue.azzeraChiamate()
        nChiamDue.value = `${userDue.numeroChiamate}`
        console.log(userDue);
    }

    function azzeraT(){
        userTre.azzeraChiamate()
        nChiamTre.value = `${userTre.numeroChiamate}`
        console.log(userTre);
    }


    interface ISim {
        credito: number; //saldo disponibile
        numeroChiamate: number; //numero chiamate effettuate 
    }

    class UserSim implements ISim {
        credito = 0;
        numeroChiamate = 0
        user: string;
        pin: number;
        static argumentscredito: number;
        static credito: number;

        constructor(credito: number, user: string, pin: number) {
            this.credito = credito;
            this.pin = pin;
            this.user = user;
        }

        //metodo definito come public void ricarica che ricarica il telefono 
        public ricarica(ricarica: number): void {
            this.credito = this.credito + ricarica;
        }

        //metodo chiamata che ogni minuto scala 20cent e incrementa il numero chiamate 
        public chiamata(): void {
           
            if (this.credito < 0.21) {
                alert('Il tuo credito è terminato, effetua una ricarica!');
                /*  clearInterval(interval) */
            } else {

               this.credito -= 0.21
                /* this.credito = +this.credito.toFixed(2); */
                interval = setInterval(timer, 1000)
                termina.style.zIndex = '1';
                this.numeroChiamate++

            }
        }

        //metodo che restituisce il credito residuo
        public numero404(credito: number): void {
            //alert o popup
            alert(`Grazie per essere nostro cliente! Il suo credito è di ${credito} €`)
        }

        //metodo che restituisce il numero delle chiamate
        // scritto il metodo ma non utilizzato, contatore chiamate già presente nel riepilogo sim 

       /*  public getNumeroChiamate(): void {
            alert(`Hai effettuato ${this.numeroChiamate} chiamate`)
        } */

        //metodo che azzera il numero delle chiamate 
        public azzeraChiamate(): void {
            this.numeroChiamate = 0
        }

    }




    let userUno = new UserSim(0, 'Utente 1', 1234)
    let userDue = new UserSim(0, 'Utente 2', 5678)
    let userTre = new UserSim(0, 'Utente 3', 9123)





    function timer() {
        secondi++
        if (+utlogg.value == userUno.pin && secondi >= 60) {
            secondi = 0;
            minuti++;
            userUno.credito -= 0.21
            userUno.credito = +userUno.credito.toFixed(2)
            ricUno.value = `${userUno.credito}`
            
        } 

        if (+utlogg.value == userDue.pin && secondi >= 60) {
            secondi = 0;
            minuti++;
            userDue.credito -= 0.21
            userDue.credito = +userDue.credito.toFixed(2)
            ricDue.value = `${userDue.credito}`
            
        }

        if (+utlogg.value == userTre.pin && secondi >= 60) {
            secondi = 0;
            minuti++;
            userTre.credito -= 0.21
            userTre.credito = +userTre.credito.toFixed(2)
            ricTre.value = `${userTre.credito}`
            
        }
        printTime()
        credit()
    }

function credit(){
    if (+utlogg.value == userUno.pin && userUno.credito < 0.20 || +utlogg.value == userDue.pin && userDue.credito < 0.20 || +utlogg.value == userTre.pin && userTre.credito < 0.20){
        clearInterval(interval)
        secondi = 0;
        minuti = 0;
        termina.style.zIndex = '-1';
        faiRicarica.style.display = 'block';
        printTime()
            
    } 
}

    function printTime() {
        let stamp = document.querySelector('.chiamata h4')
        if (stamp !== null)
            stamp.innerHTML = `${minuti}:${secondi}`
    }

    function orario(){
    let date = new Date();
    let o = addZero(date.getHours());
    let m = addZero(date.getMinutes());
    let time =  o + ":" + m  
    ora.innerHTML = time 
    }
    
    
    function addZero(i:any) {
        if (i < 10) {i = "0" + i}
        return i;
      }
    
})


function stampa(num?: number) {
    let schermo = <HTMLInputElement>document.querySelector('.chiamata input[name="numero-chiamata"]')
    display += num
    schermo.value = display
    schermo.innerHTML = display
}


function canc() {

}


