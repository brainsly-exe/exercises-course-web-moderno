const schedule = require('node-schedule')


const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 5', function () {
    console.log('Executando tarefa', new Date().getSeconds() )
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('A tarefa 1 foi cancelada')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 7)]
regra.hour = 19
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, ()=> {
    console.log('Executando a segunda tarefa')
})