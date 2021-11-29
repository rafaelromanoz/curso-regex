const texto = 'Romário era um excelente jogador, mas hoje é um político questionador';

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi)); //? ^ início de linha/string
console.log(texto.match(/r$/gi)); //? $ fim da linha ou da string
console.log(texto.match(/^r.*r$/gi)); //? problema do dotall