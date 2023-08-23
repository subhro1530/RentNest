// pages/index.js
import React from "react";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";
import SecondNavbar from "@/components/secondnavbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <SecondNavbar/>
          {/* Your homepage content */}
        <Footer/>
    </div>
  );
}

export default HomePage;
