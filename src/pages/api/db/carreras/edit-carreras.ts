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
        if (session) {
            if (req.method === 'PATCH') {
                try {
                    console.log('finding carrera list')
                    const carreras: any = await prisma.nombresCarrera.findFirst({
                        where: {
                            id: {
                                equals: req.body?.id
                            }
                        }
                    });
                    const update = await prisma.nombresCarrera.update({
                        where: {
                            id: carreras.id
                        },
                        data: {
                            NOMBRES: {
                                push: req.body
                            }
                        }
                    })
                } catch (error) { res.status(400).json(error); }
            } else { res.status(400).json("Este endpoint es solo para solicitudes PATCH para algo de nombres de carreras") }
        } else { res.status(401).json("Unathourized access.") }
    } catch (err) { res.status(500).json(err) }
}