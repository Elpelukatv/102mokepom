function IniciarJuego() {
    let SelecMascota = document.getElementById('BotonSelec')
SelecMascota.addEventListener('click', SelecMascotaJugador)
}
function SelecMascotaJugador (){
    if (document.getElementById('RATIHUELLA').checked)
    alert('ratiguella seleccionado')
    else if (document.getElementById('HIPODOGE').checked)
    alert('hipodoge seleccionado')
    else if (document.getElementById('CAPIPEPO').checked)
    alert('capipepo seleccionado')
    else alert ('selecciona una mascota')
}




window.addEventListener('load',IniciarJuego)

