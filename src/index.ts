import { Server } from "./server";

let server = new Server().app

server.listen(3000, () =>{
    console.log(`listing to port 3000`);
});


 

