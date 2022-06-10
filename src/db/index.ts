import { PrismaClient } from "@prisma/client"

export const getMyPrismaClient = async () => {
    const client = new PrismaClient({
        log: ['error', 'info', 'query', 'warn']
    })
    return client
}