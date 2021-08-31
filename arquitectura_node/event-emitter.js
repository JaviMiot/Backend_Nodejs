const EventEmmiter = require('events')


class Logger extends EventEmmiter {
    execute(cb){
        console.log('Before')
        this.emit('start') //? Emite un evento
        cb();
        this.emit('finish') //? emite otro evento
        console.log('After')
    }
}

const logger = new Logger();

logger.on('start', () => {
    console.log('start')
})


logger.on('finish', () => {
    console.log('finish')
})

logger.on('finish', () => {
    console.log('finish is done')
})

logger.execute(()=>console.log('hello world'))