import { doCustCreate } from '@/Redux/Action/reducerAction'
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function addcust() {

    const root = useRouter()

    const dispatch = useDispatch()
    const [dataCust, setDataCust]= useState({
        custId :'',
        custName : '',
        custCity:''
    })

    const evenHandler = nama => event =>{
        setDataCust({...dataCust, [nama]: event.target.value})
    }

    const addData = (e:any) =>{
        e.preventDefault();
        dispatch(doCustCreate(dataCust))
        root.push('/dashboard/customers')
    
    }

    return(
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
             <form>
                <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">custId</label>
                    <input value={dataCust.custId} onChange={evenHandler('custId')} type="text"  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                </div>
                <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">custName</label>
                    <input value={dataCust.custName} onChange={evenHandler('custName')} type="text"  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                </div>
                <div className="mb-5">
                <label htmlFor="name"className="mb-3 block text-base font-medium text-[#07074D]">custCity</label>
                    <input value={dataCust.custCity} onChange={evenHandler('custCity')} type="text"  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                </div>
                <button onClick={addData} className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">Submit</button>
            </form>
            </div>
        </div>
    )
}
