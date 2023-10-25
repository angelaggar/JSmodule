let koders = [
    {
      name: "Said Barrera",
      generation: 12,
      score: 9.2,
    },
    {
      name: "Helena Fuentes",
      generation: 8,
      score: 8.7,
    },
    {
      name: "Gerardo Cabrera",
      generation: 12,
      score: 9.9,
    },
    {
      name: "Brenda Guerrero",
      generation: 8,
      score: 8.4,
    },
    {
      name: "Alejandro Fuentes",
      generation: 7,
      score: 8.6,
    },
    {
      name: "Sandra Tellez",
      generation: 9,
      score: 9.9,
    },
  ];
  
  ////////////////// EJERCICIO 1

  //1.- Entregar el promedio general del score de los koders
  function scoreKoders(koders){
    let average = 0;
    let totalScore = 0;
    for (let i = 0; i < koders.length; i++) {

        average += koders[i].score;
    
    }
    totalScore = average / koders.length
    console.log(totalScore.toFixed(2));
}

scoreKoders(koders);

//  2.- Obtener una nueva lista que contenga únicamente aquellos koders cuyo score sea mayor que 9

function kodersplus9(koders) {
    return koders.filter(koder => koder.score > 9);
  }
  
let koderswithplus9 = kodersplus9(koders);
console.log("2.- Koders con score mayor que 9:");
console.log(koderswithplus9);

  /*3.- Saber cuantos koders hay de alguna generación específica:
        1 -> no hay koders de esta generación
        9 -> hay 1 koder de la generación 9
        12 -> hay 2 koders de la generación 12
  */

function koderCounter(koders,gen){
    let persCount = 0
    for (let i = 0; i < koders.length; i++) {
        koders[i].generation == gen ? persCount += 1 : persCount += 0
    }
    let result = persCount != 0 ? (`Hay ${persCount} personas en la generación ${gen}`) : ("No hay koders en esta generación.")
    console.log(result)
}

let gen = 8

koderCounter(koders,gen)