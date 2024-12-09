'use server'
import prisma from "../../../lib/prisma"

export default async function getAllCustomer(start: number, limit: number) {
  
    try {
        const customers = await prisma.customer.findMany({
            skip:start,
            take:limit
        })
        return { success: true, list:customers }

    }
    catch (error) {
        return { success: false, message: error }

    }
    finally {
        await prisma.$disconnect();
    }
}