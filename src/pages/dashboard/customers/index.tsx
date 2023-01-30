import React,{useEffect, useState} from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { doCustRequest, doDeleteCust } from '../../../Redux/Action/reducerAction';
import { useRouter } from 'next/router';
import {Table} from 'antd'
export default function index() {
        const rout = useRouter()
        // let navigate = useNavigate()
        let customers = useSelector(state => state.customersReducers.customers);
        const dispatch = useDispatch();
        
        useEffect(()=>{
            dispatch(doCustRequest());
        });
    
        const editdata = (id: any)=>{
            // navigate('/editcust', {state:{id}})
            rout.push({ 
                pathname:'customers/editcust',
                query: {id}
            },'customers/editcust')
        }
    
        const deletedata = (id:any)=>{
            dispatch(doDeleteCust(id))
        }

        const columns = [
            {
              title: 'custId',
              dataIndex: 'custId',
              key: 'custId',
            },
            {
              title: 'custName',
              dataIndex: 'custName',
              key: 'custName',
            },
            {
              title: 'custCity',
              dataIndex: 'custCity',
              key: 'custCity',
            },
            {
                title: 'Aksi',
                key: 'action',
                render: (_: any,record: { custId: any; }) => (
                  <span>
                    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white"  onClick={()=>editdata(record.custId)}>edit</button> 
                  </span>
                ),
            },
            {
                title: 'Aksi',
                key: 'action',
                render: (_: any,record: { custId: any; }) => (
                  <span>
                    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white"  onClick={()=>deletedata(record.custId)}>delete</button>
                  </span>
                ),
            },
          ];         
        
  return (
    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-16 rounded-bl-lg rounded-br-lg">
        <a href="/dashboard/customers/addcust" className='h-10 px-6 font-semibold rounded-md bg-black text-white'>tambah</a>
        {/* <table className="min-w-full">
            <thead>
                <tr>
                <th className='px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider'>#</th>
                <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider'>custId</th>
                <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider'>custName</th>
                <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider'>custCity</th>
                <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider width="110px"'>Action</th>
                </tr>
            </thead>
            <tbody className='bg-white'>
            {
                customers && customers.map((customers:any, i:any)=>{
                return(
                    <tr>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>{i+1}</td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>{customers.custId}</td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>{customers.custName}</td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>{customers.custCity}</td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'><button className="h-10 px-6 font-semibold rounded-md bg-black text-white"  onClick={()=>editdata(customers.custId)}>edit</button> <button className="h-10 px-6 font-semibold rounded-md bg-black text-white"  onClick={()=>deletedata(customers.custId)}>delete</button></td>
                    </tr>
                ) 
                })
            }
            </tbody>
        </table> */}
        <Table dataSource={customers} columns={columns} />
    </div>
  )
}

