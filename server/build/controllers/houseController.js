"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __importStar(require("request"));
// import pool from "../dat""abase";
class HouseController {
    list2(req, res) {
        request.get("https://anapioficeandfire.com/api/houses", (res) => {
        });
        return res;
    }
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
exports.default = houseController;
