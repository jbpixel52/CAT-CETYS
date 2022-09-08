import { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../cat-db-management/cat-dbMaker/dbMakerApplication"

let dbMakerApplication = new DbMakerApplication();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST')
    {
        dbMakerApplication.createTemplateField(req.body)
        res.status(200).json("Sucessful wrtite operation, or was it? thuuuuuum")
    }
    else{
        res.status(400).json("Este endpoint es solo para solicitudes POST para crear campos de templetes")
    }
}