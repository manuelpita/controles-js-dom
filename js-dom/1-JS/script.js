'user strict'

const userNumber = tries => {
//Generador de contraseña
    const pass = Math.floor(Math.random()*100);
    console.log(pass)
//Generador de intentos y respuestas
    for (let i = 0; i < tries; i++) {
        const userTry = prompt ('Introduce un número del 0 al 100');
        if (userTry >100 || userTry < 0) alert ('Valor no válido has perdido un intento')
        if (pass === +userTry) return true
        else {if (pass - userTry > 0) {
            console.log(`La clave es mayor que ${userTry}`)
        }
         else console.log(`La clave es menor que ${userTry}`)
            }
        }
    }

    userNumber(5)
    ? console.log(`¡¡¡Has acertado!!! 🎯🎯🎯 ¡¡¡ENHORABUENA!!!`)
    : console.log( '🧨 🧨 🧨  ¡¡¡HAS PERDIDO!!')
