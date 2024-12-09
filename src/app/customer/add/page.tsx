'use client'
import CustomerForm from "@/forms/customer-forms"
import React from 'react'
import createCustomer from "./actions"

interface Customer {
    name: string,
    alternateMobile: string,
    country:string,
    state:string,
    mobile:string,
    city:string,
    address:string,
    pincode:string,
    gstnum:string,
}

export default function addCustomer(){
   const initialCutsomerValue: Customer = {
    name: '',
    alternateMobile: '',
    country:'',
    state:'',
    mobile:'',
    city:'',
    address:'',
    pincode:'',
    gstnum:'',
  
   }
   const addCustomer = async (values: Customer) =>{
console.log(  await createCustomer(values)
)
}
   return <CustomerForm initialCutsomerValue={initialCutsomerValue} onSubmit={addCustomer} />
}