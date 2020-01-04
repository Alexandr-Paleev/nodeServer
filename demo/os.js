const os = require('os')

console.log('Operation sistem: ', os.platform())
console.log('Arhitect proccessor: ', os.arch())
console.log('Info to processor: ', os.cpus())
console.log('Free: ', os.freemem())
console.log('Total: ', os.totalmem())
console.log('Home dir: ', os.homedir())
console.log('work: ', os.uptime())