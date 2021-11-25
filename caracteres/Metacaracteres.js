// . ? * + - ^ $ | [ ] { } () \ :
const texto = '1,2,3,4,5,6,a.b c!d?e';

const regexPonto = /\./g;
console.log(texto.split(regexPonto));

const regexSimbolos = /,|\.|\?|!| /g;
console.log(texto.split(regexSimbolos));


/**
 * !Os metacaracteres são simbolos escritos reservados ao regex, para utiliza-los como strinngs literárias é necessário usar o "/" que chama scape.
 */
