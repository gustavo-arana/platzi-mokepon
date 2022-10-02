const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')
const seccionAtaque = document.getElementById('seleccionar-ataque')
const seccionMascota = document.getElementById('seleccionar-mascota')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciarJuego = document.getElementById('boton-reiniciar')
const spanMascotaJudador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const mensaje = document.getElementById('resultado')

let mokepones = []
let mokeponJugador
let mokeponEnemigo
let opcionDeMokepones
let opcionDeAtaques
let mascotaJugador
let mascotaEnemigo
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let resultado
let inputHipodoge
let inputCapipepo
let inputRatigueya
let botonAtaqueFuego
let botonAtaqueAgua
let botonAtaqueTierra

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/hipodoge.png', 3)
hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
)

let capipepo = new Mokepon('Capipepo', './assets/capipepo.png', 3)
capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' }
)

let ratigueya = new Mokepon('Ratigueya', './assets/ratigueya.png', 3)
ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' }
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {
    seccionAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label > 
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

    })

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciarJuego.addEventListener('click', reiniciarJuego)
    botonReiniciarJuego.style.display = 'none'
}

function seleccionarMascotaJugador() {
    if (inputHipodoge.checked) {
        mascotaJugador = inputHipodoge.id
        mostrarSeccionAtaque()
    }

    else if (inputCapipepo.checked) {
        mascotaJugador = inputCapipepo.id
        mostrarSeccionAtaque()
    }

    else if (inputRatigueya.checked) {
        mascotaJugador = inputRatigueya.id
        mostrarSeccionAtaque()

    } else {
        alert('Debes seleccionar una mascota')
    }

    if (mascotaJugador != '') {
        spanMascotaJudador.innerHTML = mascotaJugador

        cargaAtaques()
        seleccionarMascotaEnemigo()
        actualizaVidas()
    }
}

function cargaAtaques() {
    let posMokepon = mokepones.findIndex(mokeponJugador => mokeponJugador.nombre === mascotaJugador)

    mokeponJugador = mokepones[posMokepon]
    mokeponJugador.ataques.forEach((ataque) => {
        opcionDeAtaques = `
             <button id=${ataque.id} class="boton-de-ataque">${ataque.nombre}</button>
         `
        contenedorAtaques.innerHTML += opcionDeAtaques
    })

    botonAtaqueFuego = document.getElementById('boton-fuego')
    botonAtaqueAgua = document.getElementById('boton-agua')
    botonAtaqueTierra = document.getElementById('boton-tierra')

    botonAtaqueFuego.addEventListener('click', ataqueJugadorFuego)
    botonAtaqueAgua.addEventListener('click', ataqueJugadorAgua)
    botonAtaqueTierra.addEventListener('click', ataqueJugadorTierra)
}

function secuenciaAtaque() {

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

