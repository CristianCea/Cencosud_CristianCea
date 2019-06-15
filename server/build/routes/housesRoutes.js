"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const houseController_1 = __importDefault(require("../controllers/houseController"));
class HousesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", houseController_1.default.list2);
        this.router.get("/:id", (req, res) => {
            res.send(res);
        });
    }
}
const housesRoutes = new HousesRoutes();
exports.default = housesRoutes.router;
