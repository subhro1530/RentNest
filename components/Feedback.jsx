import styles from "../app/styles";
import FeedbackCard from "./FeedbackCard";

function Feedback() {
  const feedback = [
    {
      id: 1,
      userName: "Jaimin Hapani",
      role: "Stayed @ BTM Layout",
      imageUrl:
        "https://business.rentnest.in/restnest/static/media/ps.25900b0e9380815b1999.jpg",
      msg: "I recently moved to Bangalore and was in desperate need of a place to stay. RentNest made my search incredibly easy! Their platform is user-friendly, and I found the perfect PG accommodation within days. The filters helped me narrow down my options, and the listings were accurate. I highly recommend RentNest to anyone in search of a hassle-free rental experience.",
    },
    {
      id: 2,
      userName: "Ajay Asnani",
      role: "Stayed @ Old Airport Road",
      imageUrl: "https://demo.rentnest.in/images/Ajay4.JPG",
      msg: "RentNest has been a game-changer for me. I've rented two different flats through their platform, and both experiences were smooth. Their support team is responsive and helpful. It's great to have a one-stop-shop for all my rental needs. The only reason I'm not giving them five stars is that I wish there were more filters for specific amenities, but overall, it's a fantastic service.",
    },
    {
      id: 3,
      userName: "Shaswata Saha",
      role: "Stayed @ Bellandur",
      imageUrl: "https://demo.rentnest.in/images/shas.jpg",
      msg: "Finding a compatible roommate can be a daunting task, but RentNest made it surprisingly easy. I was able to connect with potential roommates and discuss preferences before moving in. The verification process gave me peace of mind, knowing I was sharing my space with a reliable person. Thanks, RentNest!",
    },
  ];
  return (
    <>
      <section
        id="feedback"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative ml-10 mr-10`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
        <div className="w-full flex flex-col sm:text-left text-center ml-10 mr-10">
          <h1 className={`text-gradient ${styles.heading3}`}>
            Happy Customer!
          </h1>
        </div>
        <div className="w-full flex flex-col sm:text-left text-center ml-10 mr-10">
          <p className="text-gray-400">
            Reviews from our customers who stayed with us in furnished and semi
            furnished house for short term or long term rentals.
          </p>
        </div>
        <div className="flex flex-wrap justify-center w-full mt-5 feedback-container relative-[1]">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Feedback;
