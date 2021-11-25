const texto = '1,2,3,a.b c!d?e[f';

console.log(texto.match(/\d/g)); //? tudo que NÃO for digito ex: 0-9
console.log(texto.match(/[^0-9]/g)); //? tudo que não for entre 0 e 9
console.log(texto.match(/[^\d!\?\[\s,\.]/g)) //? tudo que não for digito e tudo que não for simbolos


const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';

console.log(texto2.match(/[^!-/:-@\s]/g));