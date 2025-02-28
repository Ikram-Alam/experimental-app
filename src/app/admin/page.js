// 'use client'
// import React from "react";
// import { useAuthContext } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// function Page() {
//     const { user } = useAuthContext()
//     const router = useRouter()

//     React.useEffect(() => {
//         if (user == null) router.push("/")
//     }, [user])

//     return (<h1>Only logged in users can view this page</h1>);
// }

// export default Page;



'use client'
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Page() {
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (user == null) router.push("/");
    }, [user, router]);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
                <h1 className="text-2xl font-bold text-gray-800">Welcome to Admin Panel</h1>
                <p className="text-gray-600 mt-2">Only logged-in users can view this page.</p>
            </div>
        </div>
    );
}

export default Page;
