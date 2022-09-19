import { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../../cat-db-management/cat-dbMaker/cartas/dbMakerApplication"
import { useSession, signIn, signOut } from "next-auth/react";

let dbMakerApplication = new DbMakerApplication();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { data: session, status } = useSession();

   
    try{
        if(session){
            if(req.method === "GET")
            {
                let field = await dbMakerApplication.getSyllabusField(req.body)
                res.status(200).json(field)
            }
            else
            {
                res.status(400).json("Este endpoint es solo para solicitudes GET para obtener un campo de templete")
            }
        }
        }
       
    catch(err){
        res.status(500).json(err.message)
    }
}