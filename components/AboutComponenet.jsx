import React from "react";
import styles from "../app/styles";

function AboutComponenet() {
  return (
    <>
      <section
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative bg-gray-600 ml-10 mr-10 py-10 px-10 mb-10 rounded-xl`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
        <div className="w-full flex flex-col text-center">
          <h1
            className={`text-gradient font-semibold text-[25px] leading-[30.8px] mb-5`}>
            Finding or renting a Semi furnished home, Fully furnished flat,
            Service apartment, Paying Guest, Hostel or Co-living space be it for
            short term or long term stay!
          </h1>
        </div>
        <div className="w-full flex flex-col text-center ">
          <p className="text-dimWhite">
            Explaning in details the various forms of accomodation or stay
            options given the evolution of market. One can choose now from
            traditonal Semi furnished house, fully furnished flat, Service
            Apartment, for a family or group of friends to paying guest, hostel
            or co-living space for ladies, gents or working men and women or
            boys or girl students
          </p>
        </div>

        <div className="flex flex-wrap justify-center w-full mt-5 relative-[1]">
          DropDown Question Answer TODO
        </div>
      </section>
    </>
  );
}

export default AboutComponenet;
