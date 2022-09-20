import { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../../cat-db-management/cat-dbMaker/templetes/dbMakerApplication"
import { unstable_getServerSession } from "next-auth/next"
import authOptions from "../../../../utils/auth/options"


let dbMakerApplication = new DbMakerApplication();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await unstable_getServerSession(req, res, authOptions)



    try {
        if (session) {
            if (req.method === 'POST') {
                await dbMakerApplication.createTemplateField(req.body)
                res.status(200).json("Sucessful wrtite operation, or was it? thuuuuuum")
            }
            else {
                res.status(400).json("Este endpoint es solo para solicitudes POST para crear campos de templetes")
            }
        }else {
            res.status(401).json("Unathourized access.")
        }
    

    }
    catch (err) {
        res.status(500).json(err.message)
    }
}