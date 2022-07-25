// fs module is used for reading and writing system files
const fs = require('fs');
const http = require('http')

///////////////////////////////
//////        FILE

// Blocing code -- Synchronous 
// const textread = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textread);
// const textwrite = ` ${textread} i wrote this new text in input file .\n Created on ${Date.now()}.`
// fs.writeFileSync('./txt/output.txt', textwrite)

// Non blocking -- Asynchronous
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if(err){
//      return   console.log(`ERROR 💣💣 ${err}`)
//     }
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8',   (err, data3)  => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt',  `${data2}\n${data3}\nThis line is added by me`, (err) => {
//                 console.log('Text written successfully')

//             })
//         })
//     })
    
    

// })
// console.log('Reading File ....')


////////////////////////////////
///////////////  SERVER


const server = http.createServer((request, response) => {
    response.end(' Hello from the server')
})

server.listen('3200', '127.0.0.1' , () => {
    console.log('listening at port 3200')
})
