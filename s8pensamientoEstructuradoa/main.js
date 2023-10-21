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

function bingoGame (ballColor,ballNum){
    let result = ""
    if ((ballColor == "rojo"||"red") && (ballNum == 7)){
        result = "Felicidades! Ganaste el primer premio!!"
    } else if ((ballColor== "verde" || "green")&& (ballNum == 2)) {
        result = "Felicidades! Eres acreedor al segundo premio!"
    } else {
        result = "Seguro tendrás más suerte la próxima vez!"
    }
    return result
}

console.log (bingoGame("azul",8));
console.log (bingoGame("red",7));
console.log(bingoGame("verde",2))
