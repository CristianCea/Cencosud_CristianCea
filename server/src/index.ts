// console.log("Funcionando!")
import express, { Application } from "express";
import indexRoutes from "./routes/indexRoutes";
import housesRoutes from "./routes/housesRoutes";
import morgan from "morgan";
import cors from "cors"
import { format } from "path";
import { encode } from "punycode";

class Server {
  public app: Application;
  /**
   *
   */
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
  }

  routes(): void {
      this.app.use("/",indexRoutes);
      this.app.use("/api/houses", housesRoutes);
    //   this.app.use("/api/sucursales",sucursalesRoutes);
  }

  start(): void {
      this.app.listen(this.app.get("port"), () => {
          console.log("Run in Port "+ this.app.get("port"))
      })
  }
}

const server = new Server ();
server.start();
