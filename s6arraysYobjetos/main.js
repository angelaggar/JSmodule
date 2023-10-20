/*
   1.- Se requiere generar las iniciales de una persona usando su nombre completo.
        -> Israel Salinas Martínez
        <- I. S. M. 
*/
let fullName = "Angela Garcia Garcia"

function capLetter (fullName){
    let arrayName = fullName.split(" ")
    let sName = ""
    let newName =""
    for (i=0; i <arrayName.length; i++){
        sName = arrayName[i]
        newName += (sName.substring(0,1)+ ". ")
    }
    console.log(`Las iniciales de tu nombre son: ${newName}`)
}

capLetter(fullName)

/*
    2.- Teniendo en cuenta el siguiente texto: "Si esperas a estar listo, esperarás toda la vida"
        Queremos obtener una nueva frase que contenga sólo las palabras en posición non
        -> "Esperas estar esperarás la " 
*/
 
let phrase = "Si esperas a estar listo, esperarás toda la vida"

function oddPhrase (phrase){
    let newPhrase = ""
    let phraseArray = phrase.split(" ")  
    for (let i = 0; i < phraseArray.length; i++) {
        if (i % 2 != 0) {newPhrase += (phraseArray[i] + " ")}
    }
    console.log(newPhrase)
}

oddPhrase(phrase)

/*
    3.- Se requiere solicitar el nombre, edad, y correo de una persona, y crear una lista de personas
*/


let kodersList = []

function addPerson (name, age, email){
    let person = {};
    person.name = name;
    person.age = age;
    person.email = email;
    kodersList.push(person)
    console.log(kodersList)
}

addPerson("Angela Garcia Garcia", 35, "ggarcia.angelad@gmail.com")