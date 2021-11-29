const texto = `
Lista telefônica:
- (11) 98756-1212
- 98765-4321 ...
`;

const regexTelefone = /\(?\d+?\)?\s?\d{5}-\d{4}/gi;
const regexTele = /\(?\d+?\)?\s\d{5}-\d{4}|\d{5}-\d{4}/g;

console.log(texto.match(regexTelefone));
console.log(texto.match(regexTele));

