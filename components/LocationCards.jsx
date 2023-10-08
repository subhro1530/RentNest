import styles from "../app/styles";

function LocationCards() {
  const locationList = [
    {
      id: 1,
      locationName: "Bangalore",
      image:
        "https://7d5adc66d24881b36c8b-c7d236cd4d964e89fc66be1fc0f48d05.ssl.cf6.rackcdn.com/images/home/Bangalore.webp",
      route: "/",
    },
    {
      id: 2,
      locationName: "HRS Layout",
      image:
        "https://7d5adc66d24881b36c8b-c7d236cd4d964e89fc66be1fc0f48d05.ssl.cf6.rackcdn.com/images/home/HSR%20Layout_new.webp",
      route: "/",
    },
    {
      id: 3,
      locationName: "BTM Layout ",
      image:
        "https://7d5adc66d24881b36c8b-c7d236cd4d964e89fc66be1fc0f48d05.ssl.cf6.rackcdn.com/images/home/BTM%20Layout_new.webp",
      route: "/",
    },
    {
      id: 4,
      locationName: "Bommanahalli",
      image:
        "https://7d5adc66d24881b36c8b-c7d236cd4d964e89fc66be1fc0f48d05.ssl.cf6.rackcdn.com/images/home/Bellandur.webp",
      route: "/",
    },
    {
      id: 5,
      locationName: "Whitefield",
      image:
        "https://7d5adc66d24881b36c8b-c7d236cd4d964e89fc66be1fc0f48d05.ssl.cf6.rackcdn.com/images/home/Whitefield_new.webp",
      route: "/",
    },
    {
      id: 6,
      locationName: " Koramangala",
      image:
        "https://7d5adc66d24881b36c8b-c7d236cd4d964e89fc66be1fc0f48d05.ssl.cf6.rackcdn.com/images/home/Koramangala.webp",
      route: "/",
    },
    {
      id: 7,
      locationName: " Marathahalli",
      image:
        "https://7d5adc66d24881b36c8b-c7d236cd4d964e89fc66be1fc0f48d05.ssl.cf6.rackcdn.com/images/home/Marathahalli_new.webp",
      route: "/",
    },
    {
      id: 8,
      locationName: " Old Madras Road",
      image:
        "https://7d5adc66d24881b36c8b-c7d236cd4d964e89fc66be1fc0f48d05.ssl.cf6.rackcdn.com/images/home/Old%20Madras%20Road_new.webp",
      route: "/",
    },
    {
      id: 9,
      locationName: " Kundanahalli",
      image:
        "https://7d5adc66d24881b36c8b-c7d236cd4d964e89fc66be1fc0f48d05.ssl.cf6.rackcdn.com/images/home/Kundanahalli_new.webp",
      route: "/",
    },
    {
      id: 10,
      locationName: " Old Airport Road",
      image:
        "https://7d5adc66d24881b36c8b-c7d236cd4d964e89fc66be1fc0f48d05.ssl.cf6.rackcdn.com/images/home/Old%20Airport%20Road_new.webp",
      route: "/",
    },
    {
      id: 11,
      locationName: " Kasavanahalli",
      image:
        "https://7d5adc66d24881b36c8b-c7d236cd4d964e89fc66be1fc0f48d05.ssl.cf6.rackcdn.com/images/home/Kasavanahalli_new.webp",
      route: "/",
    },
    {
      id: 12,
      locationName: " Bellandur",
      image:
        "https://7d5adc66d24881b36c8b-c7d236cd4d964e89fc66be1fc0f48d05.ssl.cf6.rackcdn.com/images/home/Bellandur.webp",
      route: "/",
    },
  ];
  return (
    <>
      <section
        id="location"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
        <div className="w-full flex justify-between items-center text-center md:flex-row flex-col sm:mb-16 mb-6 relative-[1] border-b-[1px] border-b-[#3F3E45] text-gradient">
          <h1 className={styles.heading3}>
            Browse Rental House Listing By Location{" "}
          </h1>
        </div>

        <div className="flex flex-wrap justify-center w-full  relative-[1]">
          {locationList.map((item) => (
            <div className="flex justify-between flex-col px-3 py-3 w-full rounded-[12px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card">
              <div className="relative">
                <img
                  src={item.image}
                  alt="imgurl"
                  className="w-[400px] h-[250px] rounded-[10px] opacity-60"
                />
                <h2 className="absolute font-bold text-[22px] leading-[32px] text-gradient bottom-2 left-2 text-center">
                  {item.locationName}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default LocationCards;
