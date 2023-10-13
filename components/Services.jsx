import React from 'react'
import styles from "../app/styles";


export const Services = () => {

    const locationList = [
        {
          id: 1,
          locationName: "Rooms",
          image:
            "https://images.pexels.com/photos/7546285/pexels-photo-7546285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          route: "/",
        },
        {
          id: 2,
          locationName: "PG Accomondation",
          image:
            "https://www.safehousepg.in/owner/uploads/blog111020221808501.jpg",
          route: "/",
        },
        {
          id: 3,
          locationName: "Flats ",
          image:
            "https://images.pexels.com/photos/2305747/pexels-photo-2305747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          route: "/",
        },
        {
          id: 4,
          locationName: "Workspace",
          image:
            "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          route: "/",
        }
      ];
  return (
    <section
        className={` pb-16 ${styles.flexCenter} flex-col relative`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
        <div className="w-full flex justify-between items-center text-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1] border-b-[1px] border-b-[#3F3E45] text-gradient">
          <h1 className={styles.heading3}>
          Your Ideal Rental Property Search Starts Here{" "}
          </h1>
        </div>
        <div className="flex flex-wrap justify-center w-full  relative-[1]">
          {locationList.map((item) => (
            <div className="flex justify-between flex-col px-3 py-3 w-full rounded-[12px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card">
              <div className="relative">
              <h2 className=" uppercase font-bold text-[28px] leading-[32px] text-gradient mb-4  text-center">
                  {item.locationName}
                </h2>
                <img
                  src={item.image}
                  alt="imgurl"
                  className="w-[400px] h-[250px] rounded-[10px] "
                />
                
              </div>
            </div>
          ))}
        </div>
        
      </section>
  )
}
