
import { Request, Response } from "express";
import * as request from "request"
import rp from "request-promise"
// import pool from "../dat""abase";

class HouseController{

    public  list2(req: Request, res: Response){
        request.get("https://anapioficeandfire.com/api/houses", (res : any) => {
            
        })
        return res;        
    }
    // public async list(req: Request, res: Response){
    //     rp("https://anapioficeandfire.com/api/houses")
    //     .then((res) => {
    //         return res
    //     },
    //     err => console.log(err) 
    //     ).catch((err) => {
    //         return err
    //     })
    // }

    
//     public async list2(req: Request, res: Response){
//         const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

    }
    

    // public async getOne(req: Request, res: Response): Promise<any> {
    //     const { id } = req.params;
    //     const sucursales = await pool.query("SELECT * FROM TB_Sucursales WHERE CodSuc_Suc = ?", [id]);
    //     if (sucursales.length > 0){
    //       return res.json(sucursales[0]);
    //     }
    //     res.status(404).json({text: "The sucursal [" + id +  "] desn't exist " })
    //   }
    

      const houseController = new HouseController();
      export default houseController;