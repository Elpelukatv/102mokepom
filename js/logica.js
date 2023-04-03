let AtackJugador 
let AtackEnemigo
let Vida_Jugador =3
let Vida_Enemigo =3

    // SecSelcMAS       1ER seccion del HTML //
    // SecSelcATK       2DA seccion del HTML //
    // SecSelcSMS       3RA seccion del HTML //
    // SecSelcReinicio  4TA seccion del HTML //

    // AF funcion ataque fuego //
    // AA  funcion ataque agua //
    // AT  funcion ataque tierra //

function IniciarJuego() {

    let SelecMascota = document.getElementById('BotonSelec')
    SelecMascota.addEventListener('click', SelecMascotaJugador)

    let BTFuego = document.getElementById('BTFuego')
    BTFuego.addEventListener('click', AF)
    let BTAgua = document.getElementById('BTAgua')
    BTAgua.addEventListener('click', AA)
    let BTTierra = document.getElementById('BTTierra')
    BTTierra.addEventListener('click', AT)

    let reinicio = document.getElementById('again')
    reinicio.addEventListener('click',reiniciar)

    SelecMascotaJugador ()
}           
function SelecMascotaJugador (){

    let inputRATIHUELLA = document.getElementById('RATIHUELLA')
    let inputHIPODOGE = document.getElementById('HIPODOGE')
    let inputCAPIPEPO = document.getElementById('CAPIPEPO')
    let spannMascotaJugador = document.getElementById('MascotaJugador')
            
    if (inputRATIHUELLA.checked)
        spannMascotaJugador.innerHTML = 'RATIHUELLA' 
    else if (inputHIPODOGE.checked)
        spannMascotaJugador.innerHTML = 'hipodoge'
    else if (inputCAPIPEPO.checked)
        spannMascotaJugador.innerHTML = 'CAPIPEPO'
    else {
        alert ('selecciona una mascota')
    } 
    SelecMascotaEnemigo ()
}        
function SelecMascotaEnemigo () {
    let AtackRandom = aleatorio(1,3)
    let spannMascotaEnemigo = document.getElementById('MascotaEnemigo')

    if (AtackRandom == 1) {
        spannMascotaEnemigo.innerHTML = 'RATIHUELLA'
    } else if (AtackRandom == 2) {
        spannMascotaEnemigo.innerHTML = 'HIPODOGE'
    } else if (AtackRandom == 3) {
        spannMascotaEnemigo.innerHTML = 'CAPIPEPO'
    }    
}           
function AF (){
    AtackJugador = 'FUEGO' 
    AtackEnemigoRandom()
}
function AA (){
    AtackJugador = 'AGUA'  
    AtackEnemigoRandom()
}
function AT (){
    AtackJugador = 'TIERRA'
    AtackEnemigoRandom()    
}
function AtackEnemigoRandom () {
    let AtackRandom2 = aleatorio (1,3)
                    
    if(AtackRandom2 == 1) {
        AtackEnemigo =  'FUEGO'
    }else if(AtackRandom2 == 2) {
        AtackEnemigo =  'AGUA'     
    } else if(AtackEnemigo2 ==3){
        AtackEnemigo ='TIERRA'
    }
    combate ()

}

function combate (){
    let SpanVidasJugador = document.getElementById('VidaJugador')
    let SpanVidasEnemigo = document.getElementById('VidaEnemigo')

    if (AtackEnemigo == AtackJugador) {
        createsms("empate")
    } else if (AtackJugador == 'FUEGO' && AtackEnemigo == 'TIERRA') {
        createsms("GANASTE")
        Vida_Enemigo --
       SpanVidasEnemigo.innerHTML = Vida_Enemigo
    } else if (AtackJugador == 'AGUA' && AtackEnemigo == 'FUEGO') {
        createsms("GANASTE")
        Vida_Enemigo --
       SpanVidasEnemigo.innerHTML = Vida_Enemigo
    } else if (AtackJugador == 'TIERRA' && AtackEnemigo == 'AGUA') {
        createsms("GANASTE")
        Vida_Enemigo --
       SpanVidasEnemigo.innerHTML = Vida_Enemigo
    } else {
       createsms("perdiste")
       Vida_Jugador --
       SpanVidasJugador.innerHTML = Vida_Jugador
    }
    revisarvidas()

} 

function revisarvidas(){
    if (Vida_Jugador == 0){
        smsEnd ("  ❌❌LO SIENTO PERDISTE❌❌  ")
    } else if (Vida_Enemigo == 0){
        smsEnd (" ✅✅  FELICIDADES GANASTE ✅✅   ")
    }
    reinicio()
}

function createsms(resultado){
    let getsms = document.getElementById ('sms') 
    let parrafo = document.createElement('p') 
    parrafo.innerHTML = ' TU MASCOTA ATACO CON  ' + AtackJugador + ' , LA MASCORA DEL ENEMIGO ATACO CON  ' + AtackEnemigo + ' = ' + resultado
                        
    getsms.appendChild(parrafo)

}

function smsEnd(resultadoFinal){
    let getsms = document.getElementById ('sms') 
    let parrafo = document.createElement('p') 
    parrafo.innerHTML = resultadoFinal
                        
    getsms.appendChild(parrafo)

    let BTFuego = document.getElementById('BTFuego')
    BTFuego.disabled = true
    let BTAgua = document.getElementById('BTAgua')
    BTAgua.disabled = true
    let BTTierra = document.getElementById('BTTierra')
    BTTierra.disabled = true

}

function reiniciar(){
    reinicio = location.reload ()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
              
window.addEventListener('load',IniciarJuego)
