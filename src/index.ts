import "reflect-metadata";
import morgan from "morgan";
import express from "express";
import cors from "cors";
import { UserRouter } from "./router/user.router";

class ServerBootstrap {
  public app: express.Application = express();
  private port: number = 8000;
  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use('/api', this.routers())
    this.listen();
  }

  routers(): Array<express.Router>{
    return[new UserRouter().router];
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(
        "Server listening on port:" + this.port,
      );
      console.log("URL: http://localhost:" + this.port)
    });
  }
}

new ServerBootstrap();
