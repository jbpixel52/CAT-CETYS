
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
        if (session) {
            if (req.method === 'PUT') {
                await dbMakerApplication.editSyllabusField(req.body)
                res.status(200).json("Sucessful edit operation, or was it? thuuuuuum")
            }
            else {
                res.status(400).json("Este endpoint es solo para solicitudes PUT para editar campos de templetes")
            }
        } else {
            res.status(401).json("Unathourized access.")
        }

    }

    catch (err) {
        res.status(500).json(err.message)
    }
}