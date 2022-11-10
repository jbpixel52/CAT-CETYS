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
    const session = await unstable_getServerSession(req, res, authOptions);


    if (session) {
        console.log('session authorized')
        if (req.method === 'POST') {

            try {
                await dbMakerApplication.createSyllabusRow(req.body);
                res.status(200).json("Sucessful row wrtite operation")
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