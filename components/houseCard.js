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
      className="housecard relative flex flex-col "
      style={{
        width: "400px",
        backgroundColor: "white",
        padding: "14px",
        gap: "2vh",
        borderRadius: "16px",
      }}
    >
      <div className="image flex justify-center items-center" style={{ width: "100%" }}>
        <img style={{ width: "100%",height:"287px" }} src={imageUrl} alt="" />
      </div>
      <div className="first-line flex justify-between">
        <div className="apartment flex gap-1">
          <ApartmentIcon sx={{ color: "green" }} />
          <span style={{ fontSize: "17px" }}>{apartment}</span>
        </div>
        <div className="location flex">
          <LocationOnIcon sx={{ color: "green" }} />
          <span style={{ fontSize: "17px" }}>{location}</span>
        </div>
      </div>
      <div className="second-line flex" style={{ color: "black" }}>
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>{units}</span>
      </div>
      <div className="third-line flex">
        <span style={{ fontSize: "19px" }}>{description}</span>
      </div>
      <div className="fourth-line flex" style={{ gap: "6px" }}>
        <ChairIcon sx={{ color: "green" }} />
        <span style={{
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
        <span>{bhk}</span>
        <span>{guests}</span>
      </div>
      <div className="sixth-line flex" style={{
        justifyContent: "space-between",
        color: "black",
        fontWeight: "bold",
        fontSize: "19px"
      }}>
        <span>Regular Rent</span>
        <span>Flexi Rent</span>
          </div>
          <div className="seventh-line flex" style={{
                      justifyContent: "space-between",
                      fontWeight: "bold",
                      color:" grey",
                      fontSize: "16px",
              }}>
                  <span> {regular_rent}</span>
                  <span> {flexi_rent}</span>
              </div>
    </div>
  );
}

export default HouseCard;
