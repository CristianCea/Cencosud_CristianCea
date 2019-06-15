"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Funcionando!")
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const housesRoutes_1 = __importDefault(require("./routes/housesRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    /**
     *
     */
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use("/", indexRoutes_1.default);
        this.app.use("/api/houses", housesRoutes_1.default);
        //   this.app.use("/api/sucursales",sucursalesRoutes);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Run in Port " + this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
