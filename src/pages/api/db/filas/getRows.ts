import { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../../cat-db-management/cat-dbMaker/filas/dbMakerApplication"
import { unstable_getServerSession } from "next-auth/next"
import authOptions from "../../../../utils/auth/options"

let dbMakerApplication = new DbMakerApplication();

/**
 *
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await unstable_getServerSession(req, res, authOptions)

<<<<<<< HEAD:src/pages/api/db/filas/getRows.ts
    try {   
        if(session){
=======
    try {
        if(true){
>>>>>>> parent of e8d03d1 (renamed cat-db-management to db for my mental health):cat/pages/api/db/filas/getRows.ts
            if(req.method === 'GET'){
                let fields = await dbMakerApplication.getSyllabusRows()
                res.status(200).json(fields);
            }
            else{
                res.status(400).json("Este endpoint es solo para solicitudes GET para obtener las filas de cartas")
            }
        }else {
            res.status(401).json("Unathourized access.")
        }
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}