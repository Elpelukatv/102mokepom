    let AtackJugador 
    let AtackEnemigo

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
    
            SelecMascotaJugador ()
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
                    createsms()
                    }

                function combate (){
                    if (AtackEnemigo == AtackJugador) {
                            createsms("empate")
                    } else if (AtackJugador == 'FUEGO' && AtackEnemigo == 'TIERRA') {
                            createsms("GANASTE")
                    } else if (AtackJugador == 'AGUA' && AtackEnemigo == 'FUEGO') {
                            createsms("GANASTE")
                    } else if (AtackJugador == 'TIERRA' && AtackEnemigo == 'AGUA') {
                            createsms("GANASTE")
                    } else {
                            createsms("perdiste")
                    }
                    } 

                    function createsms(resultado){
                        let getsms = document.getElementById ('sms') 
                        let parrafo = document.createElement('p') 
                        parrafo.innerHTML = 'tu mascota ataco con' + AtackJugador + ' , las mascota del enemigo ataco con ' + AtackEnemigo + ' = ' + resultado
                        
                        getsms.appendChild(parrafo)
                        resultado ()
                        combate ()
                    }

                    function aleatorio(min, max) {
                        return Math.floor(Math.random() * (max - min + 1) + min)
                    }
        }       
    

            window.addEventListener('load',IniciarJuego)

