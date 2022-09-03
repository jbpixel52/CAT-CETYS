import { NextApiRequest, NextApiResponse } from "next"
import { DbMakerApplication } from "../../../cat-db-management/cat-dbMaker/dbMakerApplication"

let dbMakerApplication = new DbMakerApplication();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let fields = await dbMakerApplication.getTemplateFields()
    res.status(200).json(fields)
}