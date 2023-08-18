"use client";
import { SessionProvider } from "next-auth/react";
const AuthSessionProvider=({
  children,
}: {
  children: React.ReactNode;
}) =>{
  return (
    <SessionProvider>
      {children} {/* Our Entire app has access to NextAuth */}
    </SessionProvider>
  );
}


export default AuthSessionProvider