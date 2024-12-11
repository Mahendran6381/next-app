'use server'
import prisma from "../../../../lib/prisma";

export default async function createCustomer(customer: any) {
    if (!customer || Object.keys(customer).length === 0) {
        return { success: false, message: "data invalid" }
    }
    try {
        await prisma.customer.create({
            data: customer
        });
        return { success: true, message: "customer created" }

    }
    catch (error) {
        return { success: false, message: error }

    }
    finally {
        await prisma.$disconnect();
    }
}