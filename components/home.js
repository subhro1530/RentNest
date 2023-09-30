import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

const HomeComponent = () => {
    const router = useRouter()
    const [data, setData] = React.useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            //toast.success('Logout successful')
            router.push('/login')
        } catch (error) {
            console.log(error.message);
            //toast.error(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Home -yet to be made</h1>
        <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Logout</button>



            </div>
    )
}

export default HomeComponent