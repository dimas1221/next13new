import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ApiCustomers from '@/Redux/Service/apiCustomers';
import { doCustUpdate } from '../../../Redux/Action/reducerAction';
import { useRouter } from 'next/router';


export default function editcust() {
    let root = useRouter()
    // const {state}= useLocation;
    const {id} =root.query


    // const dispatch =useDispatch()
    // const [dataCust, setDataCust]= useState({
    //     custId:'',
    //     custName:'',
    //     custCity:''
    // })

    const dispatch = useDispatch();
    const [dataCust, setDataCust]= useState({
        custId :'',
        custName : '',
        custCity:''
    })

    useEffect(()=>{
        ApiCustomers.getId(id)
        .then(res=>{
            setDataCust({
                ...dataCust,
                custId: res.data.custId,
                custName: res.data.custName,
                custCity: res.data.custCity,
            })
        })
        .catch(err => alert(err))
    },[])

    // const evenHandler1 = nama => event=>{
    //     setDataCust({...dataCust, [nama]: event.target.value})
    // }
    const evenHandler = namae => event =>{
        setDataCust({...dataCust, [namae]: event.target.value})
    }

    const updateContent = (e:any)=>{
        e.preventDefault();
        dispatch(doCustUpdate(dataCust))
        console.log(dataCust)
            root.push('/dashboard/customers')
       
    }

    return(
        <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
            <form>
            <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">custName</label>
                    <input value={dataCust.custName} onChange={evenHandler('custName')} type="text" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">custCity</label>
                    <input value={dataCust.custCity} onChange={evenHandler('custCity')} type="text" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                </div>
                <button onClick={updateContent} className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">Submit</button>
            </form>
            </div>
            </div>
    )
}
