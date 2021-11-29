const texto = 'Romário era um excelente jogador, mas hoje é um político questionador';

console.log(texto.match(/^r.*r$/gi)); //? problema do dotall
console.log(texto.match(/^r[\s\S]*r$/gi)) //? Resolvendo problemas de dotall
