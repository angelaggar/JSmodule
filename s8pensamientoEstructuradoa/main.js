///////////////////////////EJERCICIO PENSAMIENTO ESTRUCTURADO/////////////////////////////////
/*
Se tiene una caja con pelotas de diferentes colores y números impresos en ella.
las personas pueden sacar una pelota al azar.
Si la pelota es roja y tiene el número 7, la persona es ganadora del primer premio
Si la pelota es verde y tiene un número dos, la persona es ganadora del segundo premio
cualquier otra variante, indica que la persona no es ganadora.
*/


let ballColor = ""
let ballNum = 0

let options = [
    {ballColor:"rojo", ballNum:7}, 
    {ballColor:"verde", ballNum:2},
    {ballColor:"azul", ballNum:1},
    {ballColor:"amarillo", ballNum:3},
    {ballColor:"negro", ballNum:5},
    {ballColor:"amarillo", ballNum:11},
    {ballColor:"verde", ballNum:13},
    {ballColor:"amarillo", ballNum:17},
    {ballColor:"negro", ballNum:19},
    {ballColor:"rojo", ballNum:23},
]

for (let i = 0; i < options.length ; i++) {
    let j = Math.floor(Math.random(options) * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }





function bingoGame (options){
    for (let i = 0; i < options.length; i++) {    
        let winnerBall = Math.floor(Math.random() * (options.length+1))
        let result = winnerBall
        if ((options.ballColor == "rojo") && (options.ballNum == 7)){
            result = "Felicidades! Ganaste el primer premio!!"
        } else if ((options.ballColor== "verde")&& (options.ballNum == 2)) {
            result = "Felicidades! Eres acreedor al segundo premio!"
        } else {
            result = "Seguro tendrás más suerte la próxima vez!"
        }
    }
    return result
}

console.log (bingoGame(options));

