import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVariables } from "./environments/environment";

let app: express.Application = express();

app.listen(3000, () =>{
    console.log(`listing to port 3000`);
});
mongoose.connect(getEnvironmentVariables().db_uri).then((res) =>{
    console.log("connected Successfully !!!!!!!!")
})
// mongoose.connect('mongodb+srv://lunatic07:rahul@cluster0.cfcgpvl.mongodb.net/swiggyClone').then((res) =>{
//     console.log("connected Successfully !!!!!!!!")
// })
 

