const seccionAtaque = document.getElementById('seleccionar-ataque')
const seccionMascota = document.getElementById('seleccionar-mascota')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciarJuego = document.getElementById('boton-reiniciar')
const botonAtaqueFuego = document.getElementById('boton-fuego')
const botonAtaqueAgua = document.getElementById('boton-agua')
const botonAtaqueTierra = document.getElementById('boton-tierra')
const spanMascotaJudador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const mensaje = document.getElementById('resultado')

let mascotaJugador
let mascotaEnemigo
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let resultado

function iniciarJuego() {
    seccionAtaque.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonAtaqueFuego.addEventListener('click', ataqueJugadorFuego)
    botonAtaqueAgua.addEventListener('click', ataqueJugadorAgua)
    botonAtaqueTierra.addEventListener('click', ataqueJugadorTierra)

    botonReiniciarJuego.addEventListener('click', reiniciarJuego)
    botonReiniciarJuego.style.display = 'none'
}

function seleccionarMascotaJugador() {

    if (inputHipodoge.checked) {
        mascotaJugador = 'Hipodoge'
        mostrarSeccionAtaque()
    }

    else if (inputCapipepo.checked) {
        mascotaJugador = 'Capipepo'
        mostrarSeccionAtaque()
    }

    else if (inputRatigueya.checked) {
        mascotaJugador = 'Ratigueya'
        mostrarSeccionAtaque()

    } else {
        alert('Debes seleccionar una mascota')
    }

    if (mascotaJugador != '') {
        spanMascotaJudador.innerHTML = mascotaJugador

        seleccionarMascotaEnemigo()
        actualizaVidas()
    }
}

function mostrarSeccionAtaque() {
    seccionAtaque.style.display = 'flex'
    seccionMascota.style.display = 'none'
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 3)

    if (mascotaAleatorio == 1) {
        mascotaEnemigo = 'Hipodoge'
    }

    else if (mascotaAleatorio == 2) {
        mascotaEnemigo = 'Capipepo'
    }

    else if (mascotaAleatorio == 3) {
        mascotaEnemigo = 'Ratigueya'
    }

    spanMascotaEnemigo.innerHTML = mascotaEnemigo
}

function ataqueJugadorFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}

function ataqueJugadorAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

function ataqueJugadorTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'

    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua'

    } else {
        ataqueEnemigo = 'Tierra'
    }

    resultado = combate()
    creaMensaje(resultado)

    revisarVidas()
}

function creaMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    mensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function creaMensajeFinal(resultadoFinal) {
    mensaje.innerHTML = resultadoFinal
    botonAtaqueFuego.disabled = true
    botonAtaqueAgua.disabled = true
    botonAtaqueTierra.disabled = true
    botonReiniciarJuego.style.display = 'block'
}

function combate() {
    if (ataqueJugador == ataqueEnemigo) {
        resultado = "Empate"
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        resultado = 'Ganaste'
        vidasEnemigo -= 1
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        resultado = 'Ganaste'
        vidasEnemigo -= 1
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        vidasEnemigo -= 1
        resultado = 'Ganaste'
    } else {
        resultado = 'Perdiste'
        vidasJugador -= 1
    }

    actualizaVidas()
    return resultado
}

function actualizaVidas() {
    spanVidasJugador.innerHTML = '❤ ' + vidasJugador
    spanVidasEnemigo.innerHTML = '❤ ' + vidasEnemigo
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        alert('Debes reiniciar el juego, el Jugador has GANADO!!.')
        creaMensajeFinal('FELICITACIONES! Ganaste')
    } else if (vidasJugador == 0) {
        alert('Debes reiniciar el juego, el Enemigo ha GANADO!!.')
        creaMensajeFinal('Lo siento, perdiste !')
    }
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

