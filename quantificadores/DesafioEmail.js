const email = `Os e-mails dos convidados são
- fulano@cod3r.com.br
- xico@gmail.com
- joao@empresa.info.br
- maria_silva@registro.br
- rafa.sampaio@yahoo.com`;

console.log(email.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g));
console.log(email.match(/\w+@\w+\.\w{2,4}/gi));
console.log(email.match(/[\w.]+@\w+\.\w{2,4}/g));
console.log(email.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g));

