const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('welcome to our home page')
}
if(req.url==='/about'){
    res.end('Here is our short history')
}

res.end(
    `<h1>OOPs!<h1>
    <h2> we cant seem to find the page you are looking for</h2>
    `
)

})

server.listen(5000)