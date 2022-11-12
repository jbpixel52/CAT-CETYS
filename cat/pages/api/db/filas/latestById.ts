import { filasCartas, PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient()

export default async function latestById(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'GET') {

        try {
            let lastID = await prisma.filasCartas.findMany({
                orderBy: {
                    id: 'desc',
                },
                take: 1
            });
            res.status(200).json(lastID);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

}