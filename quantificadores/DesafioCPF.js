const texto = `CPF dos aprovados:
- 600.567.890-12
- 765.998.340-23 ...`;

const regexCPF = /\d{3}\.\d{3}\.\d{3}-\d{2}/gi

console.log(texto.match(regexCPF));