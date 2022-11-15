import type { NextApiRequest, NextApiResponse } from "next";
import { DbMakerApplication } from "../../../../db/cat/filas/dbMakerApplication";
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
        console.log('session authorized')
        if (req.method === 'POST') {

            try {
                await dbMakerApplication.createSyllabusRow(req.body);
                res.status(200).json("Sucessful row wrtite operation, or was it? thuuuuuum")
            } catch (error) {
                console.log(error);
            }
            res.status(500).json("failed to create syllabus row");

        }
        else {
            res.status(400).json("Este endpoint es solo para solicitudes POST para crear filas de cartas")
        }
    }


}