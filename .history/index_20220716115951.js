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
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if(err){
        console.log(`ERROR 💣💣 ${err}`)
    }
    fs.readFile(`./txt/${data1}`, 'utf-8', (err, data2)=> {
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8',   (err, data3)  => {
            console.log(data3);
            fs.writeFile('./txt/final.txt', 'utf-8', `${data2}\n${data3}`, (err) => {
                console.log('Text written successfully')
            })
        })
    })
    
    
})
console.log('Reading File ....')


