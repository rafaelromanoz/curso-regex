const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>';

//? quantificadores são gulosos (greedy)...

console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));

//? quantificadores NÃO gulosos só colocar o ?

console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>/g));