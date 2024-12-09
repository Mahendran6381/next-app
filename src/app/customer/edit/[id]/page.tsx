import { getCustomerById } from "./actions";
import CustomerEdit from "./CustomerEdit";

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

export default async function CustomerEditPage({params}:{params: Promise<{id: number}>}){
  const CustomerId: number = (await params).id;
  const CustomerWithId: Customer = (await getCustomerById(CustomerId)).data
  

  return <CustomerEdit CustomerId={CustomerId} CustomerWithId={CustomerWithId} />


}