'use client';

import cookie from "js-cookie"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Navbar from './navbar'
import SecondNavbar from './secondnavbar'
import toast from 'react-hot-toast'
import Hero from './Hero'
import SearchComponent from './SearchComponent'
import Footer from './footer'
import LocationCards from './LocationCards'
import Features from './Features'
import Feedback from './Feedback'
import AboutComponenet from './AboutComponenet'
import { NextResponse } from 'next/server'

const HomeComponent = () => {

    const router = useRouter();
    const [data, setData] = React.useState("nothing");

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success('Logout Successful');
            router.push('/login');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="bg-primary w-full overflow-hidden">
            <Navbar topic={cookie.get("token2")} logout={logout}/>
            <Hero />
            <div className="mx-12 my-2">
                <SearchComponent />
            </div>
            <LocationCards />
            <Features />
            <Feedback />
            <AboutComponenet />
            <Footer />
        </div>
    )
}

export default HomeComponent;