// product.controller file er moddhe sob somoy product er CRUD(e.g:create,get,put,delete ai operation gula rakha hoi)

import { IncomingMessage, ServerResponse } from 'http';

const productController = (req:IncomingMessage,res:ServerResponse)=>{
    // /product -> GET, POST, PUT
    const url = req.url
    const method = req.method

    
    res.writeHead(200,{"content-type" : "application/json",

    })
    res.end(JSON.stringify({message:"this is a product Route"}) );
}

export default productController;