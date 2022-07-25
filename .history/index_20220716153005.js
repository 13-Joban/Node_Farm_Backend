// fs module is used for reading and writing system files
const fs = require('fs');
const http = require('http')
const url = require('url')

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

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// we used readFileSync instead of readFile as it is optimal because the top-level code is executed only once
const dataObj  = JSON.parse(data);


const server = http.createServer((request, response) => {

        const Pathname = request.url;
        console.log(Pathname)
        if(Pathname === '/' || Pathname === '/overview'){
            response.end('This is overview')
        }
        else if( Pathname === '/products'){
            response.end('This is  product ')
        }
        else if( Pathname === '/api'){
            response.writeHead(200, {
                'content-type': 'application/JSON',
                'my-own-header': 'hello-'
            })
        }

        else{
            response.writeHead(404, {
                'content-type': 'text/html',
                'my-own-header': 'hello-world'
            })
            response.end('<h1>Page Not Found</h1')
        }
       
    
})

server.listen('3700', '127.0.0.1' , () => {
    console.log('listening at port 3700')
})
