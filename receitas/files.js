const fs = require('fs');

const read = caminhorelativo => {
  return fs.readFileSync(`${__dirname}/originais/${caminhorelativo}`, {encoding: 'utf8'});
};

const write = (caminhorelativo, conteudo) => {
  const dirname = `${__dirname}/alterados`;
  if(!fs.existsSync()){
    fs.mkdirSync(dirname);
  }
  fs.writeFileSync(`${dirname}/${caminhorelativo}`, conteudo, {encoding: 'utf8'});
}

module.exports = {
  read,
  write
}