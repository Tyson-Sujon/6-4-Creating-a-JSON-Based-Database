import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/product.controller";

const routeHandler=(req: IncomingMessage, res: ServerResponse)=>{
     const url= req.url; // /;/products; /courses
    const method = req.method
    // console.log(url,method);
    
if (url === "/" && method === "GET") {
    // console.log("This is root route");
    res.writeHead(200,{
        'content-type' : 'application/json',
    });
    res.end(JSON.stringify({message: "this is root route"}));

}else if(url?.startsWith("/products")){
    productController(req,res);
}else{
    res.writeHead(404,{
        "content-type":"application/json"
    });
    res.end(JSON.stringify({message: "this route is not defined"}));

}
};
export default routeHandler;