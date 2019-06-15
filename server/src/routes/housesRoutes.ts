import { Router } from "express";
import request from "request"

import  housesController  from "../controllers/houseController";

class HousesRoutes {
  public router: Router = Router();

  
  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", housesController.list2);
    this.router.get("/:id", (req, res) => {
        res.send(res)
    });
  }
}

const housesRoutes = new HousesRoutes();
export default housesRoutes.router;
