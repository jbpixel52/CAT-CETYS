import type { NextApiRequest, NextApiResponse } from "next";
import { DbMakerApplication } from "../../../../db/cat/filas/dbMakerApplication";
import { getServerAuthSession } from '../../../../server/common/get-server-auth-session';
import { filasCartas, camposBase } from '@prisma/client';
import { prisma } from '../../../../db/client';


/**
 *
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //const dbMakerApplication = new DbMakerApplication();
    const session = await getServerAuthSession({ req, res });
    const data = JSON.parse(req.body)
    console.log(data)
    // if (true) {
    //     console.log('session authorized')
    //     if (req.method === 'POST') {
    //         try {
    //             console.log(req.body);
    //             const task = await dbMakerApplication.createSyllabusRow(req.body);
    //             return res.status(200).json(task);

    //         } catch (error) {
    //             console.log(error);
    //             res.status(500).json("failed to create syllabus row");
    //         }
    //     }
    //     else {
    //         res.status(400).json("Este endpoint es solo para solicitudes POST para crear filas de cartas")
    //     }
    // }

    
    if (req.method === 'POST') {
        const nuevaFila = await prisma.filasCartas.create(
            {
                data:
                {
                    filaJSON: data.filaJSON,
                    ACREDITADORA: data.ACREDITADORA,
                    HIDE_FLAG: data.HIDE_FLAG,
                    campoBase: data.CAMPO_BASE
                }
            }
        );
        console.log(nuevaFila);
        if (nuevaFila){
            res.status(200).json(nuevaFila.id);

        }
    } else {
        res.status(400).json('Denied: POST requests only');
    }


}