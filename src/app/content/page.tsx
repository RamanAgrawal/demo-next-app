"use client";
import React, { FC, useEffect } from 'react'
import { useSession, signOut } from "next-auth/react";
import Card from '../components/Card';
import { redirect } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { selectItems } from '../../redux/features/cardDataSlice'
import { fetchData } from '@/redux/features/cardDetailsThunk';
import Image from "next/image";

const Page = () => {
    const dispatch = useDispatch<AppDispatch>()
    const items = useSelector(selectItems)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    items?.forEach(item => (
        console.log(item.fields.thumbnail.fields.file.url)

    ))

    const { data: session } = useSession();
    console.log(session);


    //if user is not authenticated , will redirected to login page
    if (!session) {
        redirect('/')
    }
    return (
        <>

            <nav className="h-16 bg-blue-500 fixed min-w-full">
                <div className="flex justify-between p-4">
                    <h1 className="text-2xl">Demo Next App</h1>
                    <button
                        onClick={() => signOut()}
                        className="bg-red-500 p-2 rounded-md">Sign Out</button>
                </div>
            </nav>

            <div className="h-screen min-[320px]:h-fit w-full pt-20 grid grid-cols-12 gap-4 p-7">
                <div className="col-span-3">
                    <div className='h-96 flex flex-col justify-center rounded-md items-center shadow-sm p-4 bg-gray-400'>
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

                <div className="col-span-9 flex justify-around">
                    {
                        items.map((item: any, i) => (
                            <div key={i}>
                                <Card value={item.fields} />
                            </div>
                        ))
                    }

                </div>

            </div>
        </>
    )
}

export default Page