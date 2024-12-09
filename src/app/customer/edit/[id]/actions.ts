'use server'
import prisma from "../../../../../lib/prisma"

interface Customer {
    name: string;
    alternateMobile: string ; 
    country: string;
    state: string;
    mobile: string;
    city: string;
    address: string;
    pincode: string;
    gstnum: string ; 
}


type getCustomerResponse = {success: boolean, message: string, data: Customer } 
type updateCustomerResponse = {success: boolean, message: string } 

export async function getCustomerById(id: number): Promise<getCustomerResponse>{
    try{
        console.log(id)
        const CustomerWithId: Customer | null   = await prisma.customer.findUnique({
            where:{
                id: Number(id)
            }
        })
        console.log(id)
        if(!CustomerWithId){
            throw new Error('customer not found')
        }
        return {success:true, message: 'data fetched', data:CustomerWithId}
    }catch(error){
        console.log(error)
        return { success: false, message: String(error), data:{ name: "", alternateMobile: "" ,country: "", state: "" ,mobile: "" ,city: "" ,address: "" ,pincode: "", gstnum: "" }}
    }finally{
        prisma.$disconnect();
        
    }
}

export async function updateCustomer(values: Customer, id: number): Promise<updateCustomerResponse>{
    try {
        console.log("I'm gonna update");
        await prisma.customer.update({
            where: {
                id: Number(id),
            },
            data: values,
        });
        console.log("I did update");
        return { success: true, message: "Customer updated" };
    } catch (error) {
        return { success: false, message: String(error) };
    } finally {
        await prisma.$disconnect(); 
    }
}

