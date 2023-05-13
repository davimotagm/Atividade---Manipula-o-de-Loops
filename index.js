// EXERCÍCIO 1
function verticalText(palavra){
    for (i = 0; i < palavra.length; i++){
        console.log(palavra[i]);
    }
}

// EXERCÍCIO 2
function incrementText(texto) {
    let letras = ""
    for (i = 0; i < texto.length; i++) {
        letras = letras.concat(texto[i])
        console.log(letras)
    }
}


// EXERCÍCIO 3
function incrementTextBackwards(string){
    let letras = ''
    for (i = string.length - 1; i >= 0; i--){
        letras = string[i].concat(letras)
        console.log(letras)
    }
}


// EXERCÍCIO 4
function padEnd(palavra, rep, caractere){
    let juncao = palavra
    for (i = 1; i <= rep; i++){
        juncao = juncao.concat(caractere)
    }
    console.log(juncao)
}


// EXERCÍCIO 5
function subString(palavra, inicio, fim){
    let saida = ""
    for (i = inicio + 1; i < fim; i++){
        saida = saida.concat(palavra[i])
    }
    console.log(saida)
}


// EXERCÍCIO 6
function stringRepeater(palavra, quantidade){
    let saida = ""
    for (i = 1; i <= quantidade; i++){
        saida = saida.concat(palavra)
    }
    console.log(saida)
}


// EXERCÍCIO 7
function stringCentralizer(word, rep, caractere){
    let output = word
    for (i = 0; i < rep; i++){
        output = caractere + output + caractere;
    }
    console.log(output)
}

console.log('_______________________________')
console.log('EXERCÍCIO 1')
verticalText('davi');
console.log('')
console.log('_______________________________')

console.log('EXERCÍCIO 2')
incrementText('texto');
console.log('')
console.log('_______________________________')

console.log('EXERCÍCIO 3')
incrementTextBackwards('teste')
console.log('')
console.log('_______________________________')

console.log('EXERCÍCIO 4')
padEnd("Kenzie", 5, "foo");
padEnd("Kata", 8, "*");
console.log('')
console.log('_______________________________')

console.log('EXERCÍCIO 5')
subString("Mozilla", 0, 4);
subString("Chrome", 3, 5);
console.log('')
console.log('_______________________________')

console.log('EXERCÍCIO 6')
stringRepeater("Because I'm happy. ", 3);
console.log('')
console.log('_______________________________')

console.log('EXERCÍCIO 7')
stringCentralizer("JavaScript", 8, "=");
console.log('')
console.log('_______________________________')