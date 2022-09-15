let ataqueJugador = ''
let ataqueEnemigo = ''
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonAtaqueFuego = document.getElementById('boton-fuego')
    botonAtaqueFuego.addEventListener('click', ataqueJugadorFuego)

    let botonAtaqueAgua = document.getElementById('boton-agua')
    botonAtaqueAgua.addEventListener('click', ataqueJugadorAgua)

    let botonAtaqueTierra = document.getElementById('boton-tierra')
    botonAtaqueTierra.addEventListener('click', ataqueJugadorTierra)
}

function seleccionarMascotaJugador() {
    let spanMascotaJudador = document.getElementById('mascota-jugador')
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')
    let mascotaJugador = ''

    if (inputHipodoge.checked) {
        mascotaJugador = 'Hipodoge'
    }

    else if (inputCapipepo.checked) {
        mascotaJugador = 'Capipepo'
    }

    else if (inputRatigueya.checked) {
        mascotaJugador = 'Ratigueya'
    }

    else if (inputLangostelvis.checked) {
        mascotaJugador = 'Langostelvis'
    }

    else if (inputTucapalma.checked) {
        mascotaJugador = 'Tucapalma'
    }

    else if (inputPydos.checked) {
        mascotaJugador = 'Pydos'
    }

    spanMascotaJudador.innerHTML = mascotaJugador

    seleccionarMascotaEnemigo()
    actualizaVidas()
}

function seleccionarMascotaEnemigo() {
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    let mascotaAleatorio = aleatorio(1, 6)
    let mascotaEnemigo = ""

    if (mascotaAleatorio == 1) {
        mascotaEnemigo = 'Hipodoge'
    }

    else if (mascotaAleatorio == 2) {
        mascotaEnemigo = 'Capipepo'
    }

    else if (mascotaAleatorio == 3) {
        mascotaEnemigo = 'Ratigueya'
    }

    else if (mascotaAleatorio == 4) {
        mascotaEnemigo = 'Langostelvis'
    }

    else if (mascotaAleatorio == 5) {
        mascotaEnemigo = 'Tucapalma'
    }

    else if (mascotaAleatorio == 6) {
        mascotaEnemigo = 'Pydos'
    }

    spanMascotaEnemigo.innerHTML = mascotaEnemigo
}

function ataqueJugadorFuego() {

    if (vidasJugador > 0 && vidasEnemigo > 0) {
        ataqueJugador = 'Fuego'
        ataqueAleatorioEnemigo()
    } else {
        mensajeFinJuego()
    }
}

function ataqueJugadorAgua() {
    if (vidasJugador > 0 && vidasEnemigo > 0) {
        ataqueJugador = 'Agua'
        ataqueAleatorioEnemigo()
    } else {
        mensajeFinJuego()
    }
}

function ataqueJugadorTierra() {
    if (vidasJugador > 0 && vidasEnemigo > 0) {
        ataqueJugador = 'Tierra'
        ataqueAleatorioEnemigo()
    } else {
        mensajeFinJuego()
    }
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    let resultado = ''

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'

    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua'

    } else {
        ataqueEnemigo = 'Tierra'
    }

    resultado = combate()
    creaMensaje(resultado)
}

function creaMensaje(resultado) {
    let parrafo = document.createElement('p')
    let mensaje = document.getElementById('mensaje')

    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + '. ' + resultado
    mensaje.appendChild(parrafo)
}

function combate() {
    let resultado = ''

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
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    spanVidasJugador.innerHTML = vidasJugador
    spanVidasEnemigo.innerHTML = vidasEnemigo
}

function mensajeFinJuego() {
    if (vidasEnemigo == 0) {
        alert('Debes reiniciar el juego, el Jugador has GANADO!!.')
    } else {
        alert('Debes reiniciar el juego, el Enemigo ha GANADO!!.')
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

