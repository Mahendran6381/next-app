import prisma from "../../../lib/prisma";

export default async function createCustomer(customer : any){

    await prisma.customer.create({
        data:customer
    })
    .then(()=>{
        return "Customer Successfull Created"
    })
    .catch((e)=>{
        return "Not Created"
    })
    .finally(()=>{
        prisma.$disconnect()
    })
    
}

