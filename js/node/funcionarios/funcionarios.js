const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const chinesas = funcionarios.filter(function(param) {
        return param.pais == 'China' && param.genero == 'F'
    })
     

    const menorSalario = chinesas.reduce((func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    })
    console.log(menorSalario)    

})

