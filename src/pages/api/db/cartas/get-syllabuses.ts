import type { Cartas } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from '../../../../db/cat/cartas/dbMakerApplication'
import { getServerAuthSession } from '../../../../server/common/get-server-auth-session'

/**
 * @export handler
 * @param {NextApiRequest} req   {    method: "GET"   }
 * @param {Cartas[]} res Cartas[....] as JSON
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const dbMakerApplication = new DbMakerApplication();
    const session = await getServerAuthSession({ req, res })
    //author OMAR
    try {
        if (session) {
            if (req.method === 'GET') {
                const fields = await dbMakerApplication.getSyllabuses();
                console.log(fields)
                res.status(200).json(fields)
            } else {
                res.status(400).json("DENIED: FOR GET REQUESTS ONLY")
            }
        } else {
            res.status(401).json("Unathourized access.")
        }
    } catch (error) {
        res.status(500).json(error);
    }
    //author JULIO
    //session ? req.method === 'GET' ? res.status(200).json(await dbMakerApplication.getSyllabuses()) : res.status(400).json("DENIED: FOR GET REQUESTS ONLY") : res.status(401).json("Unathourized access.")

}