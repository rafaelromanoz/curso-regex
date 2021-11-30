const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial';

//? BORDA pega a palavra que começa com oque foi passado

console.log(texto1.match(/\bdia\w+/gi));
console.log(texto1.match(/\w+dia\b/gi));
console.log(texto1.match(/\w+dia\w+/gi));
console.log(texto1.match(/\bdia\b/gi));

//! BORDA é não \w, que é [^A-Za-z0-9]... temos problemas com acentos!

const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial';

console.log(texto2.match(/\bdia\b/gi));
console.log(texto2.match(/(\S*)?DIA(\S*)?/gi)); //* a virgula entra!
console.log(texto2.match((/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi)));