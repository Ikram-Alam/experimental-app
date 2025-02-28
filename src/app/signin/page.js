// 'use client'
// import React from "react";
// import signIn from "@/firebase/auth/signin";
// import { useRouter } from 'next/navigation'

// function Page() {
//     const [email, setEmail] = React.useState('')
//     const [password, setPassword] = React.useState('')
//     const router = useRouter()

//     const handleForm = async (event) => {
//         event.preventDefault()

//         const { result, error } = await signIn(email, password);

//         if (error) {
//             return console.log(error)
//         }

//         // else successful
//         console.log(result)
//         return router.push("/admin")
//     }
//     return (<div className="wrapper">
//         <div className="form-wrapper">
//             <h1 className="mt-60 mb-30">Sign up</h1>
//             <form onSubmit={handleForm} className="form">
//                 <label htmlFor="email">
//                     <p>Email</p>
//                     <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
//                 </label>
//                 <label htmlFor="password">
//                     <p>Password</p>
//                     <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
//                 </label>
//                 <button type="submit">Sign up</button>
//             </form>
//         </div>

//     </div>);
// }

// export default Page;

'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import signIn from "@/firebase/auth/signin";
import { motion } from "framer-motion";

function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleForm = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        
        const { result, error } = await signIn(email, password);

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        console.log(result);
        router.push("/admin");
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600"
        >
            <motion.div 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg w-96 text-center"
            >
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Sign In</h1>
                {error && <p className="text-red-500 mb-3">{error}</p>}
                <form onSubmit={handleForm} className="space-y-4">
                    <div>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit" 
                        className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
}

export default Page;