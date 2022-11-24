import type { NextApiRequest, NextApiResponse } from "next"
import { getServerAuthSession } from "../../../../server/common/get-server-auth-session"
import { prisma } from '../../../../db/client';
/**
 *
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerAuthSession({ req, res })
    try {
        if (true) {
            if (req.method === 'PATCH') {
                try {
                    console.log('finding carta')
                    const carta = await prisma.cartas.findFirst({
                        where: {
                            id: {
                                equals: req.body?.id
                            }
                        }
                    });

                    const update = await prisma.cartas.update({
                        where: {
                            id: carta.id
                        },
                        data: {
                            // ... provide data here
                            IDs_FILAS_CARTAS: {
                                push: req.body?.rowId?.toString(),
                            }
                        }
                    })
                    res.status(200).json(update);
                } catch (error) { res.status(400).json(error); }
            } else { res.status(400).json("Este endpoint es solo para solicitudes PATCH para crear cartas") }
        } else { res.status(401).json("Unathourized access.") }
    } catch (err) { res.status(500).json(err) }
}