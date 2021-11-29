const texto = 'João é calmo, mas no transito fica nervoso.';

console.log(texto.match(/[\wÀ-ú]+/g));

//Positive lookhead

console.log(texto.match(/[\wÀ-ú]+(?=,)/g));
console.log(texto.match(/[\wÁ-ú]+(?=.)/g));
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi));

// Negative lookahead

console.log(texto.match(/[\wÀ-ú]+\b(?!,)/g));