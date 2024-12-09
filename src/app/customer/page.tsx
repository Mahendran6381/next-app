import CustomerForm from "@/forms/customer-forms"

import { Table } from "antd"

import getAllCustomer from "./actions";

export default async function Customer(){
    const customers = (await getAllCustomer(0,15)).list;
    const dataSource = customers?.map( customer => ({
        name: customer.name,
        alternateMobie: customer.alternateMobile,
        country: customer.country,
        state: customer.state,
        mobile: customer.mobile,
        city: customer.city,
        address: customer.address,
        pincode: customer.pincode,
        gstnum: customer.gstnum
    }))
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Alternate Mobile',
          dataIndex: 'alternateMobie',
          key: 'alternateMobie',
        },
        {
          title: 'Mobile',
          dataIndex: 'mobile',
          key: 'mobile',
        },
        {
          title: 'Country',
          dataIndex: 'country',
          key: 'country',
        },
        {
          title: 'State',
          dataIndex: 'state',
          key: 'state',
        },
        {
          title: 'City',
          dataIndex: 'city',
          key: 'city',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'GST Num',
          dataIndex: 'gstnum',
          key: 'gstnum',
        },
        {
          title: 'Pincode',
          dataIndex: 'pincode',
          key: 'pincode',
        },
      ];
      
      return <Table dataSource={dataSource} columns={columns} />;
}