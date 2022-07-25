// fs module is used for reading and writing system files
const fs = require('fs');
const http = require('http')
const url = require('url')

const replaceTemplate = require(`${__dirname}`)
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


// function for replacing template with original data




const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// we used readFileSync instead of readFile as it is optimal because the top-level code is executed only once
const dataObj  = JSON.parse(data);

const template_product = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const template_card = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const template_overview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');


const server = http.createServer((request, response) => {

        // const pathname = request.url;

        // console.log(request.url);
        // console.log(url.parse(request.url, true).query)

        const {query, pathname} = url.parse(request.url, true);
           
        
        ///// Overview Page

        if(pathname === '/' || pathname === '/overview'){

            const cardsHTML = dataObj.map( (item) => 
                replaceTemplate(item, template_card)
            ).join('')

            response.writeHead(200, 
                {
                    'content-type': 'text/html',
                    'my-header': 'overview-header'
                })

                let output = template_overview.replace('{%PRODUCT_CARDS%}', cardsHTML);
                
                
                // console.log(cardsHTML)
            response.end(output)

        }







        ///// Product Page

        else if( pathname === '/product'){
                console.log(query)

                const product  = dataObj[query.id]
         
                const output = replaceTemplate(product, template_product)
                response.writeHead(200, 
                    {
                        'content-type': 'text/html',
                        'my-header': 'product-header'
                    })
                
            response.end(output)
        }





        ////// Api
        else if( pathname === '/api'){
            response.writeHead(200, {
                'content-type': 'application/JSON',
                'my-own-header': 'hello-api'
            })
            
            response.end(data);
        }

        ///// Not Found

        else{
            response.writeHead(404, {
                'content-type': 'text/html',
                'my-own-header': 'hello-world'
            })
            response.end('<h1>Page Not Found</h1')
        }
       
    
})

server.listen('3300', '127.0.0.1' , () => {
    console.log('listening at port 3300')
})
