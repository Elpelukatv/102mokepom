const windows1 = document.getElementById('SelecMascota')
const windows2 = document.getElementById('SelecAtack')
const windows3 = document.getElementById('Jugarotravez')
const windows5 = document.getElementById('vidasx2')
const SelecMascota = document.getElementById('BotonSelec')
const BTFuego = document.getElementById('BTFuego')
const BTAgua = document.getElementById('BTAgua')
const BTTierra = document.getElementById('BTTierra')
const reinicio = document.getElementById('again')

const spannMascotaJugador = document.getElementById('MascotaJugador')
const spannMascotaEnemigo = document.getElementById('MascotaEnemigo')
const SpanVidasJugador = document.getElementById('VidaJugador')
const SpanVidasEnemigo = document.getElementById('VidaEnemigo')
const Sms_Atk_Jug = document.getElementById ('Sms_Atk_Jug')
const Sms_Atk_Ene = document.getElementById ('Sms_Atk_Ene')
const getsms = document.getElementById ('sms')
const ContenedorTarjetas = document.getElementById ('ContenedorTarjetas')

let mokepones = []
let AtackJugador 
let AtackEnemigo
let OpcionesMokepones
let inputRATIHUELLA
let inputHIPODOGE
let inputCAPIPEPO
let Vida_Jugador =3
let Vida_Enemigo =3

class Mokepom {
    constructor(nombre, foto, vida, ) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataque = []
    }
}

let RATIHUELLA = new Mokepom('RATIHUELLA' , '/assets/rati.png' , '5')

let HIPODOGE = new Mokepom('HIPODOGE' , './assets/hipo.png' , '5')

let CAPIPEPO = new Mokepom('CAPIPEPO' , '/assets/capi.png' , '5')

mokepones.push(RATIHUELLA,HIPODOGE,CAPIPEPO)

RATIHUELLA.ataque.push(
    { NOMBRE: '🌊' ,id:'BTAgua' },
    { NOMBRE: '🔥' ,id:'BTFuego' },
    { NOMBRE: '🔥' ,id:'BTFuego' },
    { NOMBRE: '🔥' ,id:'BTFuego' },
    { NOMBRE: '🌎' ,id:'BTTierra' },
)

HIPODOGE.ataque.push(
    { NOMBRE: '🌊' ,id:'BTAgua' },
    { NOMBRE: '🌊' ,id:'BTAgua' },
    { NOMBRE: '🌊' ,id:'BTAgua' },
    { NOMBRE: '🔥' ,id:'BTFuego' },
    { NOMBRE: '🌎' ,id:'BTTierra' },
)

CAPIPEPO.ataque.push(
    { NOMBRE: '🌎' ,id:'BTTierra' },
    { NOMBRE: '🌎' ,id:'BTTierra' },
    { NOMBRE: '🌊' ,id:'BTAgua' },
    { NOMBRE: '🔥' ,id:'BTFuego' },
    { NOMBRE: '🌎' ,id:'BTTierra' },
)


    // windows1       1ER seccion del HTML //
    // windows2       2DA seccion del HTML //
    // windows3       3RA seccion del HTML //
    // windows4       4TA seccion del HTML //

    // AF funcion ataque fuego //
    // AA  funcion ataque agua //
    // AT  funcion ataque tierra //

function IniciarJuego() {
    
    mokepones.forEach((Mokepom) => {
    OpcionesMokepones =`
    <input type="radio" name="mascota" id=${Mokepom.nombre} />    
        <label  class="rati" for=${Mokepom.nombre} >
        <p>${Mokepom.nombre} </p> 
        <img src=${Mokepom.foto}  alt=${Mokepom.nombre} >
        </label>
     `
    ContenedorTarjetas.innerHTML += OpcionesMokepones
        inputRATIHUELLA = document.getElementById('Ratiguella')
        inputHIPODOGE = document.getElementById('Hipodoge')
        inputCAPIPEPO = document.getElementById('Capipepo')
})

    windows2.style.display = 'none'
    windows3.style.display = 'none'
    windows5.style.display = 'none'
    SelecMascota.addEventListener('click', SelecMascotaJugador)
    BTFuego.addEventListener('click', AF)
    BTAgua.addEventListener('click', AA)
    BTTierra.addEventListener('click', AT)
    reinicio.addEventListener('click',reiniciar)
}           
function SelecMascotaJugador (){
    windows1.style.display = 'none'
    windows2.style.display = 'flex'
    windows5.style.display = 'grid'
        
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
    

    let New_Atk_Ene = document.createElement('p')
    let New_Atk_Jug = document.createElement('p')
    getsms.innerHTML = Sms_Resul
    New_Atk_Jug.innerHTML = AtackJugador
    New_Atk_Ene.innerHTML = AtackEnemigo
                       
    Sms_Atk_Jug.appendChild(New_Atk_Jug)
    Sms_Atk_Ene.appendChild(New_Atk_Ene)

}

function smsEnd(resultadoFinal){
    
    let parrafo = document.createElement('p') 
    parrafo.innerHTML = resultadoFinal
                        
    getsms.appendChild(parrafo)

    
    BTFuego.disabled = true
    
    BTAgua.disabled = true
    
    BTTierra.disabled = true

    let windows3 = document.getElementById('Jugarotravez')
    windows3.style.display = 'flex'

}

function reiniciar(){
    reinicio = location.reload ()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
              
window.addEventListener('load',IniciarJuego)

