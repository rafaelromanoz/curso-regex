const texto = 'a   b';

console.log(texto.match(/a\s\s\sb/g));
console.log(texto.match(/a   b/g));

// no futuro
console.log(texto.match(/a\s+b/));
console.log(texto.match(/a {3}b/));
console.log(texto.match(/a\s{3}b/));