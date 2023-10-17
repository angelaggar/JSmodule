//Elaboramos una función para sugerirle al usuario a elegir el nombre para su mascota
//Considerar las especies: perro, gato, ave y que no conoce otras especies.

let pet
function petName (pet) {
   
        if (pet=="perro"){
            return "Tu perro se podria llamar Milaneso";
        } else if (pet=="gato"){
            return "Tu gato se podria llamar Michiflais";
        } else if (pet=="ave"){
                return "Tu ave se podria llamar piolin";
        } else{
            return "No conozco la especie";
        }
        
}
let suggestName = petName("pato")
console.log(suggestName)


///////////////////////////////////////////PRACTICA DADOS////////////////////////////////////////////////////////////////
/* Crear una calculadora de dados que pida los numeros obtenidos en cada dado y despues de 
tirar considere si la combinación es ganadora, considerando como pares ganadores:
    2,2
    4,6
    2,2
*/

let dado1, dado2
function tirarDado (dado1, dado2){
    if ((dado1>=1 && dado1<=6) && (dado2>=1 && dado2<=6)){
        if ((dado1==2 && dado2==2) || (dado1==4 && dado2==6) || ( dado1==1 && dado2==1) || (dado1==6 && dado2==4)){
            return "GANASTE"
        } else  {
            return "SUERTE PARA LA PROXIMA PERDEDOR"
        } 
    } else {
        return "NUMEROS INVALIDOS"
    }
}

let jugada = tirarDado(5,3)

console.log (jugada)