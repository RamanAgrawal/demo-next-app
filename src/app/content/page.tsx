"use client";
import React from 'react'
import { useSession, signOut } from "next-auth/react";
import Card from '../components/Card';
import { redirect } from 'next/navigation';

const page = () => {

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
                        <img className='rounded-full' src={session.user?.image||''} alt={session.user?.name||''} />
                        <h1>{session.user?.name}</h1>
                        <h1>{session.user?.email}</h1>
                    </div>
                </div>
                <div className="col-span-9 flex justify-around">
                    <Card />
                    <Card />
                    <Card />
                </div>


            </div>
        </>
    )
}

export default page