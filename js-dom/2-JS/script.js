"use strict";

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

// console.log(maxScore)

//Puntos Totales de los equipos

const obtenerTotalPuntos = (puntos) => {
  for (let i = 0; i <puntuaciones.length; i++) {

    const array = puntuaciones[i].puntos;
    const team = puntuaciones[i].equipo;
    const actualScore = array.reduce((previousScore, currentScore) =>
    previousScore + currentScore);
  }

  let maxScore = {
    equipo: "null",
    puntos: "null",
  };

  const mejorEquipo = totalScore => {
      for (const puntos in totalScore) {
        // console.log(puntos)
        // console.log(actualScore[puntos])
        const equipoActual = {
          equipo: puntuaciones[i].equipo,
          puntos: actualScore,
        }
        if (actualScore - maxScore.puntos > 0) {
          maxScore.equipo = equipoActual.equipo,
          maxScore.puntos = actualScore
        } else { maxScore.puntos = maxScore.puntos,
          maxScore.equipo = maxScore.equipo }
        }
      }
      console.log(`El mejor equipo es ${maxScore.equipo} y su Total de puntuación es ${maxScore.puntos}`)

      let minScore = {
        equipo: "null",
        puntos: "null",
      };

      const peorEquipo = totalScore => {
        for (const puntos in totalScore) {
          // console.log(puntos)
          // console.log(actualScore[puntos])
          const equipoActual = {
            equipo: puntuaciones[i].equipo,
            puntos: actualScore,
          }
          if (actualScore - maxScore.puntos < 0) {
            minScore.equipo = equipoActual.equipo,
            minScore.puntos = actualScore
          } else { maxScore.puntos = maxScore.puntos,
            minScore.equipo = minScore.equipo }
          }
        }
        console.log(`El peor equipo es ${minScore.equipo} y su Total de puntuación es ${minScore.puntos}`)
}
obtenerTotalPuntos()
mejorEquipo(puntuaciones)
peorEquipo(puntuaciones)

