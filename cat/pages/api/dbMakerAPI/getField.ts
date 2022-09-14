import { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../cat-db-management/cat-dbMaker/dbMakerApplication"

let dbMakerApplication = new DbMakerApplication();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET")
    {
        let field = await dbMakerApplication.getTemplateField(req.body)
        res.status(200).json(field)
        console.log(field)
    }
    else
    {
        res.status(400).json("Este endpoint es solo para solicitudes GET para obtener un campo de templete")
    }

}