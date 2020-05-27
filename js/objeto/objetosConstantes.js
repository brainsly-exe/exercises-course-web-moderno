const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa);

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome);

const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante);
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante);


