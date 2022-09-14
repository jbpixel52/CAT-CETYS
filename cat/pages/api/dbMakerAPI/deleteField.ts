import { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../cat-db-management/cat-dbMaker/dbMakerApplication"

let dbMakerApplication = new DbMakerApplication();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST")
    {
        await dbMakerApplication.deleteTemplateField(req.body)
        res.status(200).json("Borrado exitoso, ¿no borraste toda la base de datos vdd?")
    }
    else
    {
        res.status(400).json("Este endpoint es solo para solicitudes POST para borrar campos de templetes")
    }

}