"use client";
import React, { FC, useEffect } from 'react'
import { useSession } from "next-auth/react";
import Card from '../components/Card';
import { redirect } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { selectItems } from '../../redux/features/cardDataSlice'
import { fetchData } from '@/redux/features/cardDetailsThunk';
import Image from "next/image";
import Navbar from '../components/Navbar';

const Page:FC = () => {

    // Initialize Redux dispatch
    const dispatch = useDispatch<AppDispatch>()

    // Get items from Redux store using selector
    const items = useSelector(selectItems)

    const { data: session } = useSession();

    // Fetch data when the component mounts
    useEffect(() => {
        if (session) {
            dispatch(fetchData())
        }
    }, [dispatch, session])

     // If user is not authenticated, redirect to login page
    if (!session) {
        redirect('/')
        return null; // Return early to avoid rendering the rest of the component
    }
    return (
        <>
            {/* navbar component */}
            <Navbar />

            <div className="h-screen min-[320px]:h-fit w-full pt-20 grid grid-cols-12 gap-4 p-7">

                {/* Profile Details */}
                <div className="col-span-3">
                    <div className='h-96 flex flex-col justify-center rounded-md items-center shadow-sm p-4 bg-gray-600'>
                        <Image
                            className='rounded-full'
                            src={session.user?.image || ''}
                            alt={session.user?.name || ''}
                            width={150}
                            height={100}
                        />
                        <h1>{session.user?.name}</h1>
                        <h1>{session.user?.email}</h1>
                    </div>
                </div>
                <div className='col-span-9 p-4 pt-0'>

                    <h1 className='text-4xl bg-gray-400 mb-4 w-full rounded-md p-8'>My Recent Journey</h1>
                    <div className=" flex flex-wrap justify-between">
                        
                        {/* Render cards */}
                        {
                            items.map((item: any, i) => (
                                <div key={i}>
                                    <Card value={item.fields} />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Page
