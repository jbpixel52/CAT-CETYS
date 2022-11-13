import type { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../../db/cat/campos-cartas/dbMakerApplication"
import { getServerAuthSession } from "../../../../server/common/get-server-auth-session";




/**
 *
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const dbMakerApplication = new DbMakerApplication();
    const session = await getServerAuthSession({ req, res });
    try {
        if (session) {
            if (req.method === "POST") {
                await dbMakerApplication.deleteSyllabusField(req.body)
                res.status(200).json("Borrado exitoso, ¿no borraste toda la base de datos vdd?")
            }
            else {
                res.status(400).json("Este endpoint es solo para solicitudes POST para borrar campos de templetes")
            }
        }else {
            res.status(401).json("Unathourized access.")
        }
    
    }

    catch (err) {
        res.status(500).json(err.message)
    }
}