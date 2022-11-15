import type { NextApiRequest, NextApiResponse } from "next";
import { DbMakerApplication } from "../../../../db/cat/campos-cartas/dbMakerApplication";
import { getServerAuthSession } from '../../../../server/common/get-server-auth-session';
/**
 *
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const dbMakerApplication: DbMakerApplication = DbMakerApplication.getInstance();
    const session = await getServerAuthSession({ req, res });
    try {
        if(session){
            if(req.method === 'GET'){
                const fields = await dbMakerApplication.getSyllabusFields()
                res.status(200).json(fields)
            }
            else{
                res.status(400).json("Este endpoint es solo para solicitudes GET para obtener los campos de templete")
            }
        }else {
            res.status(401).json("Unathourized access.")
        }
    
    } catch (error) {
        res.status(500).json(error.message);
        
    }

   

}