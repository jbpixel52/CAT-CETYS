import type { NextApiRequest, NextApiResponse } from "next"
import { getServerAuthSession } from "../../../../server/common/get-server-auth-session"
import { prisma } from '../../../../db/client';
import { parse } from "path";
/**
 *
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerAuthSession({ req, res });
    const parsedBody = JSON.parse(req.body);
    try {
        if (true) {
            if (req.method === 'PATCH') {
                try {
                    const update = await prisma.cartas.update({
                        where: {
                            id: parsedBody.id
                        },
                        data: {
                            // ... provide data here
                            IDs_FILAS_CARTAS: {
                                push: parsedBody.rowId?.toString(),
                            }
                        }
                    });
                    console.log('UPDATE IS ...')
                    console.log(update);
                    res.status(200).json(update);

                } catch (error) { res.status(400).json(error); }
            } else { res.status(400).json("Este endpoint es solo para solicitudes PATCH para crear cartas") }
        } else { res.status(401).json("Unathourized access.") }
    } catch (err) { res.status(500).json(err) }
}