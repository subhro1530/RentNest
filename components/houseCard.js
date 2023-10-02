import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChairIcon from '@mui/icons-material/Chair';
const HouseCard = () => {
  return (
      <div className="housecard relative flex flex-col justify-center"
          style={{
              width: "400px",
              backgroundColor: "white",
              padding: "14px",
              gap: "2vh",
              borderRadius: "16px",
          }}>
          <div className="image flex justify-center items-center" style={{width:"100%"}}>
              <img style={{width:"100%"}} src=
                  "https://ab487509f8decc2c0cd2-9ff2a6143bff296f88e68c3257991f4b.ssl.cf6.rackcdn.com/prop_1653298858..webp"
                  alt="" />
          </div>
          <div className="first-line flex justify-between">
              <div className="apartment flex gap-1">
                  <ApartmentIcon sx={{color:"green"}} />
                  <span style={{fontSize:"17px"}}>Adhivika Apartment 3rd Floor</span>
              </div>
              <div className="location flex">
                  <LocationOnIcon sx={{color:"green"}}/>
                <span style={{fontSize:"17px"}}>Whitefield</span>
              </div>
              </div>
              <div className="second-line flex" style={{color:"black"}}>
                  <span 
                  style={{fontWeight: "bold",
                   fontSize: "15px"}}>Mulitiple Units available</span>
              </div>
              <div className="third-line flex">
                  <span style={{fontSize:"19px"}}>1BHK fully Furnished couple friendly House On Rent In Whitefield in BANGALORE</span>
              </div>
              <div className="fourth-line flex" style={{gap:"6px"}}>
                  <ChairIcon sx={{color:"green"}}/>
              <span style={{
                          fontSize: "17px",
                          color:"black",
                          fontWeight: "bold"
                  }}>Fully Furnished</span>
              </div>
              <div className="fifth-line flex"
              style={{justifyContent: "space-between",
    fontSize: "15px",
    color: "grey",
    fontWeight: "bold"}}>
                  <span>1BHK</span>
                  <span>Max Guests:3</span>
              </div>
          <div className="sixth-line flex" style={{
                  justifyContent: "space-between",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "19px"
              }}>
                  <span>Regular Rent </span>
                  <span>Flexi Rent</span>
              </div>
          <div className="seventh-line flex" style={{
                      justifyContent: "space-between",
                      fontWeight: "bold",
                      color:" grey",
                      fontSize: "16px",
              }}>
                  <span>&#8377; 23000/Month</span>
                  <span>&#8377; 30000/Month</span>
              </div>
          </div>
  )
}

export default HouseCard