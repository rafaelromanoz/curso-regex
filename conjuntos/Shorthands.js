const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`;

console.log(texto.match(/\d/g)); //? pega todos digitos 0 a 9
console.log(texto.match(/\D/g)); //? pega tudo que não são números
console.log(texto.match(/\w/g)); //? é como se fosse um conjunto de caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)); //? tudo que não é caractere
console.log(texto.match(/\s/g)); //? espaços
console.log(texto.match(/\S/g)); //? tudo que não é espaço