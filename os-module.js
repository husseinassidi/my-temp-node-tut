const { log } = require('console');
const os = require('os')

// info about current user 

const user = os.userInfo()

console.log(user);



//  method returns the system uptimes in seconds
console.log(`the system Uptime is ${os.uptime()} seconds`);
const currentOS={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);