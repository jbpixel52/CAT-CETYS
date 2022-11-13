import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth/next"
import authOptions from "../../../../utils/auth/options"
import { prisma } from '../../../../db/client';
import { Cartas } from '@prisma/client';


/**
 *
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //console.log('AUTHOPTIONS OBJECT');
    //console.log(authOptions);
    const session = await unstable_getServerSession(req, res, authOptions)
    try {
        if (true) {
            if (req.method === 'PATCH') {
                try {
                    console.log('finding carta')
                    let carta = await prisma.cartas.findFirst({
                        where: {
                            id: {
                                equals: req.body?.id
                            }
                        }
                    });

                    let update = await prisma.cartas.update({
                        where: {
                            id:carta.id
                        },
                        data: {
                          // ... provide data here
                            IDs_FILAS_CARTAS: {
                                push: req.body?.rowId?.toString(),
                          }
                        }
                      })
                    res.status(200).json(update);

                } catch (error) {
                    console.log(error);
                    res.status(400);
                }


            }
            else {
                res.status(400).json("Este endpoint es solo para solicitudes PATCH para crear cartas")
            }
        } else {
            res.status(401).json("Unathourized access.")
        }

    }

    catch (err) {
        res.status(500).json(err)
    }
}