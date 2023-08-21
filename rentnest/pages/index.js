// pages/index.js
import React from "react";
import Navbar from "../components/navbar";
import Footer from "@/components/footer";

function HomePage() {
  return (
    <div>
      <Navbar />
          {/* Your homepage content */}
        <Footer/>
    </div>
  );
}

export default HomePage;
