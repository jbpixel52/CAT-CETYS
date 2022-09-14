import { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../cat-db-management/cat-dbMaker/dbMakerApplication"

let dbMakerApplication = new DbMakerApplication();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'PUT')
    {
        dbMakerApplication.editTemplateField(req.body)
        res.status(200).json("Sucessful edit operation, or was it? thuuuuuum")
    }
    else{
        res.status(400).json("Este endpoint es solo para solicitudes PUT para editar campos de templetes")
    }
}