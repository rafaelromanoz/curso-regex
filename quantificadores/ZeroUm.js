const texto1 =  'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';

//* ? - zero ou um (opcional) - ele verifica se o caractere anterior esta presente ou não

const regex = /fogo?/gi;
console.log(texto1.match(regex));
console.log(texto2.match(regex));
