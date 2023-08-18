"use client";
import { useSession, signIn } from "next-auth/react";
import { redirect } from 'next/navigation'
import { FC } from "react";

// Login component for handling user authentication
const Login: FC = () => {
    
    // Get the user session using NextAuth's useSession hook
    const { data: session } = useSession();

    // If the user is already authenticated, redirect to the content page
    if (session) {
        redirect('/content')
    } else {
        // If the user is not authenticated, show the sign-in button
        return (

            <>
                <div className="flex items-center justify-center h-[100vh]">
                    {/* Button to initiate sign-in with Google */}
                    <button onClick={() => signIn('google')}
                        className="rounded-md p-4 shadow-lg bg-zinc-200 text-black hover:shadow-md hover:shadow-white">
                        Sign In with Google
                    </button>
                </div>
            </>
        );
    }
};

export default Login