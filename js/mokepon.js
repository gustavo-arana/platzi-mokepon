let ataqueJugador = ''
let ataqueEnemigo = ''
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let seccionAtaque = document.getElementById('seleccionar-ataque')
    seccionAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonAtaqueFuego = document.getElementById('boton-fuego')
    botonAtaqueFuego.addEventListener('click', ataqueJugadorFuego)

    let botonAtaqueAgua = document.getElementById('boton-agua')
    botonAtaqueAgua.addEventListener('click', ataqueJugadorAgua)

    let botonAtaqueTierra = document.getElementById('boton-tierra')
    botonAtaqueTierra.addEventListener('click', ataqueJugadorTierra)

    let botonReiniciarJuego = document.getElementById('boton-reiniciar')
    botonReiniciarJuego.addEventListener('click', reiniciarJuego)
    botonReiniciarJuego.style.display = 'none'
}

function seleccionarMascotaJugador() {
    let spanMascotaJudador = document.getElementById('mascota-jugador')
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let mascotaJugador = ''

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
    let seccionAtaque = document.getElementById('seleccionar-ataque')
    seccionAtaque.style.display = 'flex'

    let seccionMascota = document.getElementById('seleccionar-mascota')
    seccionMascota.style.display = 'none'
}

function seleccionarMascotaEnemigo() {
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    let mascotaAleatorio = aleatorio(1, 3)
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

    revisarVidas()
}

function creaMensaje(resultado) {
    let mensaje = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    mensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function creaMensajeFinal(resultadoFinal) {
    let mensaje = document.getElementById('resultado')

    mensaje.innerHTML = resultadoFinal

    let botonAtaqueFuego = document.getElementById('boton-fuego')
    botonAtaqueFuego.disabled = true

    let botonAtaqueAgua = document.getElementById('boton-agua')
    botonAtaqueAgua.disabled = true

    let botonAtaqueTierra = document.getElementById('boton-tierra')
    botonAtaqueTierra.disabled = true

    let botonReiniciarJuego = document.getElementById('boton-reiniciar')
    botonReiniciarJuego.style.display = 'block'
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

