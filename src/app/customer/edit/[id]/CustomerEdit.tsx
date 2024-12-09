'use client'
import CustomerForm from "@/forms/customer-forms";
import {  updateCustomer } from "./actions";

interface Customer {
    name: string,
    alternateMobile: string ,
    country:string,
    state:string,
    mobile:string,
    city:string,
    address:string,
    pincode:string,
    gstnum:string ,
}

interface CustomerPropValue {
    CustomerWithId: Customer;
    CustomerId: number
}

export default function CustomerEdit({CustomerId, CustomerWithId}: CustomerPropValue){
    const addCustomer = async (values: Customer) =>{
        console.log("im getting called")
        await updateCustomer(values, CustomerId)
      }
      return <CustomerForm initialCutsomerValue={CustomerWithId} onSubmit={addCustomer} />
    
}