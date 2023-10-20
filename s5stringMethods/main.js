///////// Primera Practica

let txt = ""
let num = 0

function sizeVerification (txt,num){
    let nameSize = txt.length
    let shortName = ""
    for (i=0; i<=num; i++){
        let letterCounter= txt.charAt(i);
        (nameSize >= num) ? (shortName+=letterCounter) : shortName = "Ops! Este nombre es muy corto"
    }
    console.log(`El nickname para tu nombre es:`)
    console.log(shortName)
}

sizeVerification("Angela",4)


//// Opcion 2

let nameOp2 =""
let numOp2 = 0

function substringName (nameOp2,numOp2){
    let result = ""
    if (nameOp2.length >= numOp2){
        result = nameOp2.substring(0,numOp2);
    } else{ result = "Este nombre es muy corto"}
    console.log(result);
}

substringName("Diego",3)


///////// Segunda Practica

let ourPhrase = "La mejor forma de predecir el futuro es creándolo."

function evenOddCount (ourPhrase){
    let phraseArray = ourPhrase.split(" ")
    let evenCount = 0
    let oddCount = 0
    let wordCount = phraseArray[i]
    for (i=0; i <= phraseArray.length; i++){
        wordCount.length % 2 == 0 ? evenCount += 1 : oddCount += 1
    }
    console.log (`La cantidad de palabras pares es ${evenCount} y la cantidad de palabras nones es ${oddCount}`)
    
}


evenOddCount(ourPhrase)


/* 
function oddEven (ourPhrase){
    let phraseArray= ourPhrase.split(" ")
    let evenWords;
    let oddWords;
    let wordCount = phraseArray.length
    for (i=0; i<=wordCount; i++){
        let currentWord = phraseArray[i]
        if (currentWord.length % 2 == 0 ){
            phraseArray[i++]
            evenWords += currentWord
        }else{
            oddWords += currentWord
        }
        /* console.log(currentWord) */
   /*      console.log(evenWords)
        console.log(oddWords)
    }
    console.log (phraseArray)
     */
   /*  console.log (evenWords)
    console.log(`Las palabras pares son ${evenWords.length}: ${evenWords}`)
    console.log(`Las palabras nones son: ${oddWords.length}: ${oddWords}`) */
/* 
}

oddEven(ourPhrase)
 */