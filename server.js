const http = require('http');
const port= 3000;

// const server= http.createServer((req, res) => {
//     res.writeHead(200,{"content-type":"text/plain"})
//     res.write("hello world")
//     res.end()
// })

// server.listen(port, () => {
//     console.log(`server is running on port ${port}`)
// })

const server = http.createServer((req, res) => {
    if(req.url==="/"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.write("hello world")
        res.end()
    }
    else if(req.url==="/about"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.write("this is about page")
        res.end()
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"})
        res.write("page not found")
        res.end()
    }
})

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})