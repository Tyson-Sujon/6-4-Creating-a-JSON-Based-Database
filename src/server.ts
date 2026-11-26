import { createServer, Server, IncomingMessage, ServerResponse } from "http";
import routeHandler from "./routes/route";

const server : Server  = createServer((req : IncomingMessage, res : ServerResponse) => {
    // console.log("request: ",req) //GET ; // POST;
    // console.log("Response: ",res);
    // console.log(req.url);
    // console.log(req.method);
   routeHandler(req,res);
    
},
);
server.listen(5000,()=>{
    console.log('Hello, server ');
    
})