// fs module is used for reading and writing system files
const fs = require('fs');
// const name   = 'Jobanpreet Singh';
// console.log(name);
const textread = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textread);
const textwrite = ` ${textread} i wrote this new text in input file .\n Created on ${Dat}  `
fs.writeFileSync()