import type { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../../db/cat/filas/dbMakerApplication"
import { getServerAuthSession } from "../../../../server/common/get-server-auth-session"

/**
 *
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerAuthSession({ req, res })
    const dbMakerApplication: DbMakerApplication = DbMakerApplication.getInstance();
    try {
        if (session) {
            if (req.method === 'GET') {
                const fields = await dbMakerApplication.getSyllabusRows()
                res.status(200).json(fields);
            } else { res.status(400).json("DENIED: FOR GET REQUESTS ONLY") }
        } else { res.status(401).json("Unathourized") }
    } catch (error) { res.status(500).json(error) }
}