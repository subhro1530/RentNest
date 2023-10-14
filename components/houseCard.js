import React from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChairIcon from '@mui/icons-material/Chair';

const HouseCard = (props) => {
  const {
    imageUrl,
    apartment,
    location,
    units,
    description,
    furnishing,
    bhk,
    guests,
    regular_rent,
    flexi_rent,
  } = props;

  return (
    <div
      className=" bg-black-gradient relative flex flex-col "
      style={{
        width: "400px",
        padding: "14px",
        gap: "2vh",
        borderRadius: "16px",
      }}
    >
      <div className="image flex justify-center items-center" style={{ width: "100%" }}>
        <img className='rounded-md' style={{ width: "95%", height: "240px" }} src={imageUrl} alt="property img" />
      </div>
      <div className="first-line flex justify-between">
        <div className="apartment flex gap-1">
          <ApartmentIcon sx={{ color: "green" }} />
          <span className='text-dimWhite' style={{ fontSize: "17px" }}>{apartment}</span>
        </div>
        <div className="location flex">
          <LocationOnIcon sx={{ color: "green" }} />
          <span className='text-dimWhite' style={{ fontSize: "17px" }}>{location}</span>
        </div>
      </div>
      <div className="second-line flex" style={{ color: "black" }}>
        <span className='text-gradient' style={{ fontWeight: "bold", fontSize: "15px" }}>{units}</span>
      </div>
      <div className="third-line flex">
        <span className='font-bold font-serif' style={{ fontSize: "19px" }}>{description}</span>
      </div>
      <div className="fourth-line flex" style={{ gap: "6px" }}>
        <ChairIcon sx={{ color: "green" }} />
        <span
          className='text-gradient' style={{
            fontSize: "17px",
            color: "black",
            fontWeight: "bold"
          }}>{furnishing}</span>
      </div>
      <div className="fifth-line flex"
        style={{
          justifyContent: "space-between",
          fontSize: "15px",
          color: "grey",
          fontWeight: "bold"
        }}>
        <span className='text-dimWhite'>{bhk}</span>
        <span className='text-dimWhite'>{guests}</span>
      </div>
      <div className="sixth-line flex" style={{
        justifyContent: "space-between",
        color: "black",
        fontWeight: "bold",
        fontSize: "19px"
      }}>
        <span className='text-gradient'>Regular Rent</span>
        <span className='text-gradient'>Flexi Rent</span>
      </div>
      <div className="seventh-line flex" style={{
        justifyContent: "space-between",
        fontWeight: "bold",
        color: " grey",
        fontSize: "16px",
      }}>
        <span className='text-dimWhite'> {regular_rent}</span>
        <span className='text-dimWhite'> {flexi_rent}</span>
      </div>
    </div>
  );
}

export default HouseCard;
