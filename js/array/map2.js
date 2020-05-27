const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }' 
]

// retornar um array apenas com os preços

const novo = carrinho.map(param => JSON.parse(param)).map(param => param.preco)
console.log(novo)
