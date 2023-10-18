let name = ""
function nickName(name){
    let charCount = name.length
    let oddName = ""
    let evenName = ""
    for (let i = 0; i <= charCount; i++){
        let currentChar = name.charAt(i)
        i % 2 === 0 ? (evenName += currentChar) : (oddName += currentChar)
    }
    console.log ( `Con pares ${evenName}`);
    console.log ( `Con nones ${oddName}`);
}

nickName("Aizza")