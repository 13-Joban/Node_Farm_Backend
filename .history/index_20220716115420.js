// fs module is used for reading and writing system files
const fs = require('fs');
// const name   = 'Jobanpreet Singh';
// console.log(name);

// Blocing code -- Synchronous 
// const textread = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textread);
// const textwrite = ` ${textread} i wrote this new text in input file .\n Created on ${Date.now()}.`
// fs.writeFileSync('./txt/output.txt', textwrite)

// Non blocking -- Asynchronous
fs.readFile('./txt/start.txt', (err, data1) => {
    if(err){
        console.log(`ERROR 💣💣 ${err}`)
    }
    fs.readFile(`./txt/${data1}`, (err, data2)=> {
        fs.readFile(`./txt/append.txt`, (err, data3)  => {

            fs.writeFile('./txt/final.txt', `${data}`, (err) => {
                console.log('Text written successfully')
            })
        })
    })
    
    
})
console.log('Reading File ....')


