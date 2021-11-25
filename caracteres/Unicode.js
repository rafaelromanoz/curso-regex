/**
 ** no inicio, era um byte(8 bits) - 256 caracteres
 * ? Simbolos pontuação, A-Z, a-z, 0-9
 * ! unicode-table.com/pt
 */

 const texto = 'aʬw';
 console.log(texto.match(/\u02ac/g));  

 // para acessar é só colocar o U de unicode e passar o código que se encontra no site;