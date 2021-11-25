// g - global
// i - ignore case
const texto = 'Carlos assinou o abaixo-assinado.';
console.log(texto.match(/q|ab/gi));

// Métodos

const regexNove = RegExp('9');
console.log('Métodos da RegExp');
console.log(regexNove.test(texto)) // retorna true ou false se o regex possuir;
console.log(regexNove.exec(texto)); // retorna oque foi procurado, index,  e o texto pŕocurado;

const regexLetras = /[a-f]/g;
console.log('Métodos da string');
console.log(texto.match(regexLetras)); // retorna um array de string que foi encontrado o regex
console.log(texto.search(regexLetras)); // retorna o index do primeiro que foi encontrado
console.log(texto.replace(regexLetras)); // a cada match ele vai realizar o replace
console.log(texto.split(regexLetras)); // ele vai retornar um array de string separando por cada match que for encontrado
