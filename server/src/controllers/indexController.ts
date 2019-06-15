import { Request, Response} from "express";



class IndexController{

    public index (req: Request, res: Response) {
        res.json("Api de Cea")
    }

}

export const indexController = new IndexController();