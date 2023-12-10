import * as express from "express";

let app: express.Application = express();

app.listen(3000, () =>{
    console.log(`listing to port 3000`);
});