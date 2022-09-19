import { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../../cat-db-management/cat-dbMaker/cartas/dbMakerApplication"
import { useSession, signIn, signOut } from "next-auth/react";


let dbMakerApplication = new DbMakerApplication();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { data: session, status } = useSession();

    try {
        if (session) {
            if (req.method === 'POST') {
                await dbMakerApplication.createSyllabusField(req.body)
                res.status(200).json("Sucessful wrtite operation, or was it? thuuuuuum")
            }
            else {
                res.status(400).json("Este endpoint es solo para solicitudes POST para crear campos de templetes")
            }
        }
    }

    catch (err) {
        res.status(500).json(err.message)
    }
}