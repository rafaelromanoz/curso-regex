const texto = '.$+*?-';
//! Quando utilizamos conjuntos com metacaracteres não precisa usar o SCAPE
console.log(texto.match(/[+.?*$]/g));
console.log(texto.match(/[$-?]/g)); // isso é um intervalo (range)
console.log(texto.match(/[$\-?]/g));