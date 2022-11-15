import type { NextApiRequest, NextApiResponse } from "next";
import { DbMakerApplication } from "../../../../db/cat/templetes/dbMakerApplication";
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

    if (session) {
        if (req.method === 'GET') {
            const fields = await dbMakerApplication.getTemplateFields()
            res.status(200).json(fields)
        }
        else {
            res.status(400).json("Este endpoint es solo para solicitudes GET para obtener los campos de templete")
        }
    } else {
        res.status(401).json("Unathourized access.")
    }

}