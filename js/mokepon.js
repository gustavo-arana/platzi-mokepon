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
const contenedorMensaje = document.getElementById('mensajes')
const mensaje = document.getElementById('resultado')

let mokepones = []
let botones = []
let ataquesJugador = []
let ataquesEnemigo = []
let ataquesMokeponEnemigo = []
let mokeponJugador
let mokeponEnemigo
let opcionDeMokepones
let opcionDeAtaques
let mascotaJugador
let mascotaEnemigo
let ataqueJugador
let ataqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let resultado
let inputHipodoge
let inputCapipepo
let inputRatigueya
let botonAtaqueFuego
let botonAtaqueAgua
let botonAtaqueTierra
let ultimoAtaqueJugador
let ultimoAtaqueEnemigo

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

        seleccionarMascotaEnemigo()
        cargaAtaques()
        actualizaVidas()
    }
}

function cargaAtaques() {
    let posMokepon = mokepones.findIndex(mokeponJugador => mokeponJugador.nombre === mascotaJugador)

    mokeponJugador = mokepones[posMokepon]
    mokeponJugador.ataques.forEach((ataque) => {
        opcionDeAtaques = `
             <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
         `
        contenedorAtaques.innerHTML += opcionDeAtaques
    })

    botones = document.querySelectorAll('.BAtaque')
    secuenciaAtaque()
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataquesJugador.push('🔥')

            } else if (e.target.textContent === '💧') {
                ataquesJugador.push('💧')

            } else {
                ataquesJugador.push('🌱')
            }

            boton.style.background = '#112f58'
            boton.disabled = true
            ataqueAleatorioEnemigo()
        })
    })
}

function mostrarSeccionAtaque() {
    seccionAtaque.style.display = 'flex'
    seccionMascota.style.display = 'none'
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(0, mokepones.length - 1)
    console.log(mascotaAleatorio)
    mascotaEnemigo = mokepones[mascotaAleatorio]
    ataquesMokeponEnemigo = mascotaEnemigo.ataques
    spanMascotaEnemigo.innerHTML = mascotaEnemigo.nombre
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)

    ataquesEnemigo.push(ataquesMokeponEnemigo[ataqueAleatorio].nombre)
    console.log(ataquesEnemigo)

    resultado = combate()
    creaMensaje(resultado)
    revisarVidas()
}

function creaMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    ultimoAtaqueJugador = ataquesJugador[ataquesJugador.length - 1]
    console.log(ultimoAtaqueJugador)

    ultimoAtaqueEnemigo = ataquesEnemigo[ataquesEnemigo.length - 1]
    console.log(ultimoAtaqueEnemigo)

    mensaje.innerHTML = resultado

    nuevoAtaqueDelJugador.innerHTML = ultimoAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ultimoAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function creaMensajeFinal(resultadoFinal) {
    mensaje.innerHTML = resultadoFinal
    botonReiniciarJuego.style.display = 'block'
}

function combate() {
    ultimoAtaqueJugador = ataquesJugador[ataquesJugador.length - 1]
    ultimoAtaqueEnemigo = ataquesEnemigo[ataquesEnemigo.length - 1]

    if (ultimoAtaqueJugador == ultimoAtaqueEnemigo) {
        resultado = "Empate"
        contenedorMensaje.style.backgroundColor = "b0bdb9"

    } else if (ultimoAtaqueJugador == '🔥' && ultimoAtaqueEnemigo == '🌱') {
        resultado = 'Ganaste'
        contenedorMensaje.style.backgroundColor = "caf3e7"
        victoriasJugador++

    } else if (ultimoAtaqueJugador == '🌱' && ultimoAtaqueEnemigo == '💧') {
        resultado = 'Ganaste'
        contenedorMensaje.style.backgroundColor = "caf3e7"
        victoriasJugador++

    } else if (ultimoAtaqueJugador == '💧' && ultimoAtaqueEnemigo == '🔥') {
        resultado = 'Ganaste'
        contenedorMensaje.style.backgroundColor = "caf3e7"
        victoriasJugador++

    } else {
        resultado = 'Perdiste'
        contenedorMensaje.style.backgroundColor = "e8c4c4"
        victoriasEnemigo++
    }

    console.log(contenedorMensaje.style.backgroundColor)

    actualizaVidas()
    return resultado
}

function actualizaVidas() {
    spanVidasJugador.innerHTML = '⭐ ' + victoriasJugador
    spanVidasEnemigo.innerHTML = '⭐ ' + victoriasEnemigo
}

function revisarVidas() {
    if (ataquesJugador.length == 5) {
        if (victoriasJugador == victoriasEnemigo) {
            creaMensajeFinal('Lo siento, hubo empate !')

        } else if (victoriasJugador > victoriasEnemigo) {
            creaMensajeFinal('FELICITACIONES! Ganaste')

        } else {
            creaMensajeFinal('Lo siento, perdiste !')
        }
    }
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

