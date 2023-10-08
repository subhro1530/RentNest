import styles from "../app/styles";
import FeedbackCard from "./FeedbackCard";

function Feedback() {
  const feedback = [
    {
      id: 1,
      userName: "Jaimin Hapani",
      role: "Satyed @ BTM Layout",
      imageUrl:
        "https://business.rentnest.in/restnest/static/media/ps.25900b0e9380815b1999.jpg",
      msg: "I cannot wait for RentNest to launch! The idea of a platform that simplifies room and flat hunting in Bangalore is exactly what we need. I am excited to see how RentNest will make our lives easier.",
    },
    {
      id: 2,
      userName: "Ajay Asnani",
      role: "Satyed @ Old Airport Road",
      imageUrl: "https://demo.rentnest.in/images/Ajay4.JPG",
      msg: "I've been following RentNest's development closely, and I'm impressed with the dedication and innovation they're bringing to the table. I have high hopes that RentNest will revolutionize the way we rent properties in Bangalore.",
    },
    {
      id: 3,
      userName: "Shaswata Saha",
      role: "Satyed @ Bellandur",
      imageUrl: "https://demo.rentnest.in/images/shas.jpg",
      msg: "As someone currently searching for rental options in Bangalore, I'm eagerly looking forward to RentNest's launch. The concept of a one-stop platform for finding rooms, PGs, and flats sounds like a game-changer.",
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
