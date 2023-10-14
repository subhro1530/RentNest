'use client';

import cookie from "js-cookie"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
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
import { Services } from "./Services";

const HomeComponent = () => {
    const [isSticky, setIsSticky] = useState(false);


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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Adjust the scroll threshold as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
        <div className="bg-primary w-full overflow-hidden">
            <Navbar topic={cookie.get("token2")} logout={logout} />

            <div className={`SecondNavbar ${isSticky ? 'fixed-second-navbar' : ''} `} >
            <SecondNavbar />
            </div>
            
            <Hero />
            <Services />
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