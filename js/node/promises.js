const fs = require('fs');
const path = require('path')

const url = path.join(__dirname, 'arquivoGerado.json');
const divider = '=========================================================';

function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            resolve(data.toString());
        });
    });
}

/*
* Função geradora de números aleatórios
* Utilizando Try / Catch 
*/
function generateRandomNumbers(min, max, quantity) {
    try {
        if (!min || !max) throw new Error('É necessário inserir um período inicial e max');
        if (!quantity) throw new Error('É necessário inserir uma quantidade de números a serem gerados');

        for (param of [min, max, quantity]) {
            if (typeof param !== 'number') throw new Error('Função aceita apenas números como parâmetros');
        }
        
        if (min > max) {
            const minTemp = min; 
            const maxTemp = max;

            max = minTemp;
            min = maxTemp;
        }
        const generatedNumbers = [];
        const factor = max - min + 1;

        for (i=0; i < quantity; i++) {
            const number = Math.floor(Math.random() * factor);
            generatedNumbers.push(number);
        }
        return generatedNumbers;
    } catch (error) {
        return console.log(error);
    }
}

/*
* Função geradora de números aleatórios
* Retorna uma Promise
*/
function generateRandomNumbersAsync(min, max, quantity) {
    return new Promise((resolve, reject) => {
        if (!min || !max) reject('É necessário inserir um período minímo e máximo');
        if (!quantity) reject('É necessário inserir uma quantidade de números a serem gerados');
        
        [min, max, quantity].forEach((param) => {
            if (typeof param !== 'number') reject('Função aceita apenas números como parâmetros');
        });

        if (min > max) {
            const minTemp = min; 
            const maxTemp = max;

            max = minTemp;
            min = maxTemp;
        }
        const generatedNumbers = [];
        const factor = max - min + 1;

        for (i=0; i < quantity; i++) {
            const number = Math.floor(Math.random() * factor);
            generatedNumbers.push(number);
        }
        resolve(generatedNumbers);
    });
}

async function runAllFunctions() {
        console.time('readFile')
    await readFile().then((response) => {
        console.log(response);
        console.timeEnd('readFile')
    });

    console.log(divider);

    // Função normal para gerar números aleatórios
    console.log(generateRandomNumbers(5, 100, 8));

    console.log(divider);
    
    // Função async para gerar números aleatórios
    await generateRandomNumbersAsync(10, 1000, 10)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
    
    console.log(divider);

    // Função async para gerar números aleatórios (chamada com erro)
    await generateRandomNumbersAsync(10, 'b', 10)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
    
    console.log(divider);

    // Função async para gerar números aleatórios (chamada com erro)
    await generateRandomNumbersAsync(10, 1000)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

    console.log(divider);

    console.log('Function ao fim do runAllFunctions');
}

runAllFunctions();
