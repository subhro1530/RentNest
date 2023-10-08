import React from "react";
import styles from "../app/styles";

function Hero() {
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col sm:py-10 py-2 xs:mt-2 mt-1`}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold sm:text-[52px] text-[45px] text-white sm:leading-[100px] leading-[75-px]">
              Renting Made Easy,
              <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Nesting Made Joyful </span>{" "}
            </h1>
          </div>

          <h1 className=" font-poppins font-semibold sm:text-[52px] text-[45px] text-white sm:leading-[100px] leading-[75-px] w-full">
            in Bengaluru.
          </h1>
          <p
            className={`${styles.paragraph} sm:max-w-[420px] max-w-[470px] mt-5`}>
            Daily | Monthly | Yearly
          </p>
          <p
            className={`${styles.paragraph} sm:max-w-[420px] max-w-[470px] mt-5`}>
            Bangalore's largest network of houses for rent
          </p>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img
            src="/images/house.png"
            alt="billing"
            className="w-[60%] h-[70%] mt-2 relative z-[5]"
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </section>
    </>
  );
}

export default Hero;
