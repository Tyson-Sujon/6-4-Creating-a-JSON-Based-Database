// product.controller file er moddhe sob somoy product er CRUD(e.g:create,get,put,delete ai operation gula rakha hoi)

import { IncomingMessage, ServerResponse } from 'http';

const productController = (req:IncomingMessage,res:ServerResponse)=>{
 
   // /product -> GET, POST, PUT
    const url = req.url
    const method = req.method


    if (url === '/products' && method ==='GET') {
        const products = [
            {
                id:1,
                name: "product-1",
                price: 20
            },{
                id:2,
                name: "product-2",
                price: 30,
            }

        ];

          res.writeHead(200,{"content-type" : "application/json"});
    res.end(JSON.stringify({
        message:"product retrive succesfully",
        data: products,
   }),
    );
  }
};
export default productController;