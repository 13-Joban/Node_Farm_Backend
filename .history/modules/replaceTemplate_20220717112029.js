module.export  = (item , template_card) => {
    let output  = template_card.replace(/{%PRODUCTNAME%}/g, item.productName );
    output = output.replace(/{%IMAGE%}/g, item.image );
    output = output.replace(/{%QUANTITY%}/g, item.quantity);
    output = output.replace(/{%PRICE%}/g, item.price);
    
    output = output.replace(/{%FROM%}/g, item.from);
    output = output.replace(/{%DESCRIPTION%}/g, item.description);
    output = output.replace(/{%ID%}/g, item.id);
    output = output.replace(/{%NUTRIENTS%}/g, item.nutrients);
    
        if(!item.organic){
            output = output.replace(/{%NOTORGANIC%}/g, 'not-organic');
            // we directly replaced with not-organic because it is class we have used
            
        }
    
        // output will be in HTML 
        return output;
    
    }