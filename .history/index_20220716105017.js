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
fs.readFile('./txt/star0t.txt', (err, data) => {
    if(err){
        console.log('ERROR : EXPerr)
    }
    else
    console.log(data)
})
console.log('Reading File ....')
