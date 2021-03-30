const http = require('http');
const { read } = require('node:fs');
const { createServer } = require('node:http');

const server = http.createServer((req,res)=>{
    res.status =200;
    read.wns('Hello World');
})
sever.listen(3000,() => {
    console.log('server on port 3000')
})