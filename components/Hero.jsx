import React from "react";
import styles from "../app/styles";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function Hero() {
  return (
    <>
      <section
        id="home"
        className={`justify-center text-center items-center flex md:flex-row flex-col sm:py-10 py-2 xs:mt-2 mt-1`}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold sm:text-[55px] text-[45px] text-white sm:leading-[70px] leading-[75-px]">
              Discover Most Suitable
              <span className="text-gradient"> Rental Property </span>{" "}
            </h1>
          </div>

          <h1 className=" font-poppins font-semibold sm:text-[55px] text-[45px] text-white sm:leading-[70px] leading-[75-px] w-full">
            in Bengaluru.
          </h1>

          <p
            className={`${styles.paragraph} w-full  mt-5`}>
            Unlock the Door to Your Perfect Home in Bangalore with RentNest!
          </p>
          <div className="w-full mt-10"> 
           <a href="/#location">
           <button 
              type="button"
              className="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-2xl px-5 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              <p>
                <span>Explore Now <DoubleArrowIcon className="text-4xl items-center" /></span>
              </p>
            </button>
            </a> 
            </div>
        </div>

        {/* <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 px-5 relative`}>
          <img
            src="/images/house.png"
            alt="billing"
            className="mt-2 relative object-contain z-[5]"
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div> */}
        
      </section>
    </>
  );
}

export default Hero;
