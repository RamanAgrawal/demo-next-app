import React, { FC } from 'react';
import { signOut } from 'next-auth/react';

// Navbar component to display the navigation bar
const Navbar: FC = () => {
    return (
  
        <nav className="h-16 bg-blue-500 fixed min-w-full">
           
            <div className="flex justify-between p-4">
                {/* Application logo/title */}
                <h1 className="text-3xl">Demo Next App</h1>
                {/* Button to sign out */}
                <button
                    onClick={() => signOut()} // Call signOut function on button click
                    className="bg-red-500 p-2 rounded-md hover:bg-red-800">Sign Out</button>
            </div>
        </nav>
    );
}

export default Navbar;
