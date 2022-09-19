import { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../../cat-db-management/cat-dbMaker/cartas/dbMakerApplication"

let dbMakerApplication = new DbMakerApplication();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET'){
        let fields = await dbMakerApplication.getSyllabusFields()
        res.status(200).json(fields)
    }
    else{
        res.status(400).json("Este endpoint es solo para solicitudes GET para obtener los campos de templete")
    }
}