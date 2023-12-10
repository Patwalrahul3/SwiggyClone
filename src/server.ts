import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVariables } from "./environments/environment";
import UserRouter from "./routers/UserRouter";

export class Server {
  public app: express.Application = express();
  constructor() {
    this.setConfigs();
    this.setRoutes();
  }

  setConfigs() {
    this.connectMongoDB();
  }

  connectMongoDB() {
    mongoose.connect(getEnvironmentVariables().db_uri).then((res) => {
      console.log("connected Successfully !!!!!!!!");
    });
  }

  setRoutes() {
    this.app.use("/api/user", UserRouter);
  }
}
