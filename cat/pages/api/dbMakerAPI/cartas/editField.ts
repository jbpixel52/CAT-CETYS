import { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../../cat-db-management/cat-dbMaker/cartas/dbMakerApplication"

let dbMakerApplication = new DbMakerApplication();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try{
        if(req.method === 'PUT')
        {
            await dbMakerApplication.editSyllabusField(req.body)
            res.status(200).json("Sucessful edit operation, or was it? thuuuuuum")
        }
        else{
            res.status(400).json("Este endpoint es solo para solicitudes PUT para editar campos de templetes")
        }
    }
    catch(err){
        res.status(500).json(err.message)
    }
}