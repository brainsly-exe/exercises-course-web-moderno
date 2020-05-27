const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?

// Desafio 2: Algum aluno é bolsista?

const allBolsistas = alunos.map(param => {
    let bolTrue = 0
    
    if(param.bolsista) {
        bolTrue++
    }
    if(bolTrue == alunos.length) {
        console.log('Todos são bolsistas')
    } else {
        console.log('Não são todos que são bolsistas')
    }
})
