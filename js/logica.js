let AtackJugador 
let AtackEnemigo
let Vida_Jugador =3
let Vida_Enemigo =3

    // windows1       1ER seccion del HTML //
    // windows2       2DA seccion del HTML //
    // windows3       3RA seccion del HTML //
    // windows4       4TA seccion del HTML //

    // AF funcion ataque fuego //
    // AA  funcion ataque agua //
    // AT  funcion ataque tierra //

function IniciarJuego() {
    let windows2 = document.getElementById('SelecAtack')
    windows2.style.display = 'none'

    let windows3 = document.getElementById('Jugarotravez')
    windows3.style.display = 'none'

    let windows4 = document.getElementById('vidas')
    windows4.style.display = 'none'


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

}           
function SelecMascotaJugador (){

    let windows1 = document.getElementById('SelecMascota')
    windows1.style.display = 'none'
    
    let windows2 = document.getElementById('SelecAtack')
    windows2.style.display = 'flex'

    let windows4 = document.getElementById('vidas')
    windows4.style.display = 'flex'
    
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

function createsms(Sms_Resul){
    let getsms = document.getElementById ('Sms_Resul') 
    let Sms_Atk_Jug = document.getElementById ('Sms_Atk_Jug')
    let Sms_Atk_Ene = document.getElementById ('Sms_Atk_Ene')

    let New_Atk_Jug = document.createElement('p')
    let New_Atk_Ene = document.createElement('p')

    getsms.innerHTML = Sms_Resul
    New_Atk_Jug.innerHTML = AtackJugador
    New_Atk_Ene.innerHTML = AtackEnemigo
                       
    Sms_Atk_Jug.appendChild(New_Atk_Jug)
    Sms_Atk_Ene.appendChild(New_Atk_Ene)

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

    let windows3 = document.getElementById('Jugarotravez')
    windows3.style.display = 'block'

}

function reiniciar(){
    reinicio = location.reload ()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
              
window.addEventListener('load',IniciarJuego)
