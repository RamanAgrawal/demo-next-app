"use client";
import { useSession, signIn } from "next-auth/react";
import { redirect } from 'next/navigation'


const Login: React.FC = () => {
    //geting session from nextAuth
    const { data: session } = useSession();
   

    if (session) {
        redirect('/content')
    
    } else {
        return (
            //show a sign in with google button
            <>
                <div className="flex items-center justify-center h-[100vh]">
                    <button onClick={() => signIn('google')}
                        className="rounded-md p-4 shadow-lg bg-zinc-200 text-black">
                        Sign In with Google
                    </button>
                </div>
            </>
        );
    }
};

export default Login