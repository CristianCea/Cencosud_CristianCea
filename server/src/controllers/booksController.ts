
import { Request, Response } from "express";
// import pool from "../database";

class BooksController{

    // public async list(req: Request, res: Response){
    //     const sucursales = await pool.query("select * from TB_Sucursales ");
    //     res.json(sucursales);

    // }

    // public async getOne(req: Request, res: Response): Promise<any> {
    //     const { id } = req.params;
    //     const sucursales = await pool.query("SELECT * FROM TB_Sucursales WHERE CodSuc_Suc = ?", [id]);
    //     if (sucursales.length > 0){
    //       return res.json(sucursales[0]);
    //     }
    //     res.status(404).json({text: "The sucursal [" + id +  "] desn't exist " })
    //   }
    }

      const booksController = new BooksController();
      export default booksController;