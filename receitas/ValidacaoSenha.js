const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`

console.log(texto.match(/^.{6,20}$/gm)); //? senha de 6 a 20

console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm)); //? usando positive lookahead

console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^$*]).{6,20}$/gm));

//! O regex final aceita senhas com 6 a 20 caracteres, caracteres especiais, letras maiusculas,letras normais e números

