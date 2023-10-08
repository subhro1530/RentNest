import styles, { layout } from "../app/styles";

function Features() {
  return (
    <>
      <section id="festures" className={layout.section}>
        <div className={`ml-10 ${layout.sectionInfo}`}>
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
          <div className="w-full flex items-left text-left md:flex-row flex-row">
            <h1
              className={`text-gradient font-semibold xs:text-[28px] text-[20px]`}>
              Why RentNest ?
            </h1>
          </div>
          <div
            className={`${layout.sectionInfo} text-left ${styles.paragraph}`}>
            <ul className="space-y-1 text-white list-disc ">
              <li>
                Fully furnished and ideal for short term and long term rentals.
              </li>
              <li>
                Choose between short term renting and long term renting based on
                your need best alt to Service Apartments and hotels.
              </li>
              <li>Bangalore's largest network of curated rental houses</li>
              <li>Rent for Any Duration</li>
              <li>Zero Brokerage Charges</li>
              <li>Families, Couples, Friends, Singles Welcome!</li>
            </ul>
          </div>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          <img
            src="https://www.rentmystay.com/resource/home/assets/images/mob-booknew.png"
            alt="rent   "
            className="sm:w-[80%] w-[60%]"
          />
        </div>
      </section>
    </>
  );
}
export default Features;
