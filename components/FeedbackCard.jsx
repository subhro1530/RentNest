import React from "react";

function FeedbackCard({ msg, userName, role, imageUrl }) {
  return (
    <div className="flex justify-between flex-col px-8 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-3 feedback-card">
      <img
        src="/images/quotes.svg"
        alt="double_quotes"
        className="w-[37px] h-[22px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {msg}
      </p>
      <div className="flex flex-row ">
        <img
          src={imageUrl}
          alt={userName}
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ml-4 items-center">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {userName}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
