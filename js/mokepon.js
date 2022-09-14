
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    let botonAtaqueFuego = document.getElementById('boton-fuego')
    let botonAtaqueAgua = document.getElementById('boton-agua')
    let botonAtaqueTierra = document.getElementById('boton-tierra')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonAtaqueFuego.addEventListener('click', ataqueJugadorFuego)
    botonAtaqueAgua.addEventListener('click', ataqueJugadorAgua)
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
    ataqueEnemigo()
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
    return 'Fuego'
}

function ataqueJugadorAgua() {
    return 'Agua'
}

function ataqueJugadorTierra() {
    return 'Tierra'
}

function ataqueEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    let ataqueEnemigo = ''

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'

    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua'

    } else {
        ataqueEnemigo = 'Tierra'
    }

    return ataqueEnemigo
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

