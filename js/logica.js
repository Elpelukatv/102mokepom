function IniciarJuego() {
    let SelecMascota = document.getElementById('BotonSelec')
SelecMascota.addEventListener('click', SelecMascotaJugador)
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

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
}
}



window.addEventListener('load',IniciarJuego)

