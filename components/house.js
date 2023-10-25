"use client"
import { BiCloset, BiTimer } from "react-icons/bi"
import {BsFillBagFill, BsFillHouseAddFill, BsFillPeopleFill, BsFlower1} from "react-icons/bs"
import { MdDoorbell, MdPool } from "react-icons/md"
import {GiGasStove,GiHidden,GiSofa} from "react-icons/gi"
import { AcUnit, Apartment, Balcony, Bed, Chair, Curtains, Doorbell, Elevator, Kitchen, Lightbulb, LiveTv, Map, Place, Restaurant, SmokeFree, TwoWheeler, Wifi } from '@mui/icons-material'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.min.css';//bootstrap css file
import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Carousel } from 'react-responsive-carousel';
import { Table } from "react-bootstrap"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { Autocomplete, Button, TextField, useMediaQuery } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Drawer, RadioGroup, Radio, ButtonToolbar,  Placeholder } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';//rsuite css file



const OneHouseComponent = () => {
  const [key, setKey] = React.useState('home');
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [backdrop, setBackdrop] = React.useState('static');
  const matches = useMediaQuery('(min-width:1060px)');
  const matches2 = useMediaQuery('(min-width:600px)');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <div className="one-house flex w-full justify-evenly p-6" style={{width:matches2?"100%":"100vh"}}>
          <div className="left flex flex-col gap-3" style={{width:"650px"}}>
              <div className="top flex flex-col gap-3  rounded-lg" style={{ width: "650px",padding:"10px",border:"1px solid black",padding:"20px" }}>
                  <div className="first-line flex justify-between items-center">
                      <div className="description" style={{ fontSize: "25px" }}>
                      1BHK Fully Furnished House On Rent In Whitefield in BANGALORE
                      </div>
                      <div className="map-pointer flex flex-col justify-center items-center">
                          <Place sx={{fontSize:"53px",color:"green"}} />
                          <span style={{fontSize:"20px"}}>Map</span>
                      </div>
                  </div>
                  <div className="second-line" style={{color:"grey" ,fontSize:"19px"}}>
                  Adhvika Residency #Site no 3, 4th cross, outer circle, Whitefield, Bangalore-560066
                  </div>
                  <div className="third-line flex" style={{gap:"28px"}}>
                      <div className="building flex font-bold items-center gap-1">
                          <Apartment sx={{fontSize:"28px",color:"green"}}/>
                          <span style={{fontSize:"19px"}}>Adhvika Residency 2nd Floor  1BHK</span>
                      </div>
                      <div className="sofa flex font-bold gap-1">
                          <Chair sx={{fontSize:"28px",color:"green"}}/>
                          <span style={{fontSize:"19px"}}>Fully Furnished</span>
                      </div>
                  </div>
                  <div className="fourth-line" style={{color:"grey",fontSize:"18px"}}>
                      Multiple units available
                  </div>
              </div>
              <div className="middle text-lg">
                  Home  / Bangalore /  Whitefield  /  1BHK Fully Furnished Home in Bangalore
              </div>
              <div className="carousel">
            <Carousel>
            {items.map( (item, i) => <Item key={i} src={item.src} /> )}
            </Carousel>
              </div>
              <div className="note p-2 rounded-lg" style={{backgroundColor:"#f8f8f8"}}>
                  <span className="font-bold">Please Note:</span>
                  <p>The furniture and furnishings may appear different from what’s shown in the pictures. Dewan/sofa may be provided as available.</p>
              </div>
              <div className="note2 p-2 rounded-lg" style={{backgroundColor:"#f8f8f8"}}>
                  <span className="font-bold">Certified COVID Safe</span>
                  <p>All our houses are cleaned and fully sanitized by our staff before you move in or visit any of our houses in-person.</p>
              </div>
        <div className="tabs rounded-lg" style={{ width: "650px",backgroundColor:"#f8f8f8",padding:"10px 50px" }}>
        <style type="text/css">
        {`
    .tab-content {
      //you can apply css like this as well
    }
    `}
      </style>
    <div className="flex w-full flex-col">
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
              className="mb-3 flex justify-center"
              style={{backgroundColor:"#f8f8f8"}}
    >
      <Tab eventKey="home" title="Amenities">
      <div className="amenities flex grid grid-cols-3 xl:grid-cols-4  gap-12">
     <IconComponent iconName="utensils" />
      <IconComponent iconName="fridge" />
      <IconComponent iconName="balcony" />
      <IconComponent iconName="elevator" />
      <IconComponent iconName="smokefree" />
      <IconComponent iconName="lights" />
      <IconComponent iconName="doorbell" />
      <IconComponent iconName="wifi" />
      <IconComponent iconName="tv" />
      <IconComponent iconName="bed" />
      <IconComponent iconName="bikeParking" />
                  <IconComponent iconName="curtains" />
                  <IconComponent iconName="closets" />
                  <IconComponent iconName="doorbell" />
                  <IconComponent iconName="stove-cylinder" />
                  <IconComponent iconName="sofa"/>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Amenities Not Available">
      <div className="non-amenities flex grid grid-cols-3 xl:grid-cols-4  gap-12">
      <IconComponent iconName="wifi" />
      <IconComponent iconName="tv" />
      <IconComponent iconName="bed" />
      <IconComponent iconName="bikeParking" />
                  <IconComponent iconName="curtains" />
                  <IconComponent iconName="closets" />
                  <IconComponent iconName="doorbell" />
                  <IconComponent iconName="stove-cylinder" />
                  <IconComponent iconName="sofa"/>
        </div>
      </Tab>
              <Tab eventKey="contact" title="Paid Amenities" >
              <div className="non-amenities flex grid grid-cols-3 xl:grid-cols-4  gap-12">
              <IconComponent iconName="wifi paid" />
                  <IconComponent iconName="tv paid" />
                  <IconComponent iconName="AC paid" />
                  <IconComponent iconName="pool paid" />
                </div>
      </Tab>
    </Tabs>
    </div>   
        </div>
        <div className="rent-covers p-3 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
          <p className="font-bold" style={{fontSize:"16px"}}>
            What your Rent covers
          </p>
          <p className="font-semibold font-serif text-center">
          Rent for Flexi Rental Stays:
          </p>
          <Table striped bordered hover>
            <thead>
            <style type="text/css">
        {`
    th{
      width:50%;
    }
    `}
      </style>
        <tr>
          <th className="flex w-full justify-center">Includes</th>
          <th className="text-center">Does Not Include</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
                <td className="p-3">
                <ul>
      {flexi_rent_covers.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
          </td>
                <td className="p-3">
                <ul>
      {flexi_rent_not_covers.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
          </td>
         
        </tr>
      </tbody>
          </Table>
          <p className="font-semibold font-serif text-center">
          Rent for Regular Rental Stays:
          </p>
          <Table striped bordered hover>
            <thead>
            <style type="text/css">
        {`
    th{
      width:50%;
    }
    `}
      </style>
        <tr>
          <th className="flex w-full justify-center">Includes</th>
          <th className="text-center">Does Not Include</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
                <td className="p-3">
                <ul>
      {regular_rent_covers.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
          </td>
                <td className="p-3">
                <ul>
      {regular_rent_not_covers.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
          </td>
         
        </tr>
      </tbody>
    </Table>
        </div>
        <div className="places-nearby p-3 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
        <p className="font-bold font-serif" style={{fontSize:"16px",color:"green"}}>
            Nearby places
          </p>
          <div className="flex w-full flex-col">
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
              className="mb-3 flex justify-center"
              style={{backgroundColor:"#f8f8f8"}}
    >
      <Tab eventKey="home" title="Airport">
      <Table striped bordered hover>
            <thead>
            <style type="text/css">
        {`
    th{
      width:50%;
    }
    `}
      </style>
        <tr>
          <th className="flex w-full justify-center">Places</th>
          <th className="text-center">Distance</th>
        </tr>
      </thead>
      <tbody>
      {placesAndDistances.map((placeAndDistance) => {
                      return (
                        <tr>
                          <td className="p-3 flex justify-left items-center">
                            <div className="flex justify-center items-center"> 
                            <ul>
                              <li key={placeAndDistance[0]}>{placeAndDistance[0]}</li>
                            </ul>
                            </div>
                          </td>
                          <td className="p-3 ">
                          <ul className="flex justify-center items-center p-0">
                             <li> {placeAndDistance[1]} km</li>
                              </ul>
                          </td>
                        </tr>
                      )
                    })}
      </tbody>
          </Table>
      </Tab>
      <Tab eventKey="profile" title="Hospital">
      <Table striped bordered hover>
            <thead>
            <style type="text/css">
        {`
    th{
      width:50%;
    }
    `}
      </style>
        <tr>
          <th className="flex w-full justify-center">Places</th>
          <th className="text-center">Distance</th>
        </tr>
      </thead>
      <tbody>
      {placesAndDistances.map((placeAndDistance) => {
                      return (
                        <tr>
                          <td className="p-3 flex justify-left items-center">
                            <div className="flex justify-center items-center"> 
                            <ul>
                              <li key={placeAndDistance[0]}>{placeAndDistance[0]}</li>
                            </ul>
                            </div>
                          </td>
                          <td className="p-3 ">
                          <ul className="flex justify-center items-center p-0">
                             <li> {placeAndDistance[1]} km</li>
                              </ul>
                          </td>
                        </tr>
                      )
                    })}
      </tbody>
          </Table>
      </Tab>
              <Tab eventKey="contact" title="Mall" >
              <Table striped bordered hover>
            <thead>
            <style type="text/css">
        {`
    th{
      width:50%;
    }
    `}
      </style>
        <tr>
          <th className="flex w-full justify-center">Places</th>
          <th className="text-center">Distance</th>
        </tr>
      </thead>
      <tbody>
      {placesAndDistances.map((placeAndDistance) => {
                      return (
                        <tr>
                          <td className="p-3 flex justify-left items-center">
                            <div className="flex justify-center items-center"> 
                            <ul>
                              <li key={placeAndDistance[0]}>{placeAndDistance[0]}</li>
                            </ul>
                            </div>
                          </td>
                          <td className="p-3 ">
                          <ul className="flex justify-center items-center p-0">
                             <li> {placeAndDistance[1]} km</li>
                              </ul>
                          </td>
                        </tr>
                      )
                    })}
      </tbody>
          </Table>
      </Tab>
    </Tabs>
    </div> 
        </div>
        <div className="knowledge p-3 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
        <p className="font-bold" style={{fontSize:"16px"}}>
            Description
          </p>
          <ul>
            <li >1BHK Semi Furnished Flat for Rent in BTM Layout. This Rental House has 1 Bedroom with an attached Bathroom, a Modular Kitchen, and a Hall. The Bedroom is bright, quite spacious, warm, cozy, and comfortable; with A Modular Kitchen and a Bathroom that has an option of a hot and cold shower.</li>
            <li >This 1BHK flat is suitable for families, Bachelors and is also Couple-Friendly. You can Book this flat on Daily Basis, Short Term & Long term and that too Without any brokerage.</li>
          </ul>
          <p className="font-bold" style={{ fontSize: "16px" }}>
            About 
          </p>
          <ul>
            <li >Makana Tower is a multistorey standalone building with 7 floors located in Tavarekere, BTM 1st stage. Makana Tower has multiple 1BHK and 2BHK on each floor, each house comes with good ventilation. Makana Tower comes with bike parking, Power backup, Elevator and 24hours water supply. The common area of the building is quite spacious which is managed by Caretaker to provide a good experience for our tenants. Makana Tower is located in Brindavan Nagar main road, Tavarekere. which is a residential location. This area is very popular among young crowd due to presence of eatouts and Cafe's such as Grand Ashirvad Hotel, Thakali Momo, Venu's Biriyani, Tasty Restaurant , Godavari etc...This place is also very close to Christ College, Forum mall, St.John wood apartments.and IT Companies such as Accenture, Oracle , IBC Knowledge Park, Byjus. This place is also very accessible to Hospitals such as Nimhans, Kidwai Memorial Institute of Oncology, St.Johns etc...</li>
          </ul>
          <p className="font-bold" style={{fontSize:"16px"}}>
        House Rule
          </p>
          <ul>
            <li >We believe in Do It Yourself model, so this apartment will not have any Service Staff. However, if you wish to hire a Maid/Cook for your convenience, we can provide you with relevant contacts, wherever available.</li>
        <li>We expect the house to be kept clean and tidy with your move out. Garbage has to be segregated into Dry and Wet waste and be disposed of directly to Govt. provided facilities (Mobile Pickup vans, Designated areas, etc).</li>  
        <li>Please make sure that you are not disturbing your neighbors or neighborhood. We wish you a good stay.</li>
        </ul>
        </div>
          </div>
      <div className="right flex flex-col gap-5" style={{ width: "24vw",minWidth: "300px",display:matches?"flex":"none"}}>
      <div className="right-top flex flex-col" >
        <div className="book-now flex justify-center items-center p-2 rounded-t-xl" style={{backgroundColor:"green",color:"white",fontSize:"16px"}}>
          BOOK NOW TO GET EXCLUSIVE DEALS
        </div>
        <div className="form flex flex-col p-2 gap-3 rounded-xl"  style={{ backgroundColor: "#f8f8f8" }}>
          <div className="rent">
          <Table striped bordered hover size="sm">
            <thead>
            <style type="text/css">
        {`
       .table{
        margin-bottom:0;
       }
    `}
      </style>
        <tr>
          <th className="flex w-full justify-center">Rent</th>
          <th className="text-center">Security Deposit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
                  <td className="p-3 text-center">
                    ₹17000/M
                  </td>
                  <td className="p-3 text-center">
                    ₹10000/M
                </td>
         
        </tr>
      </tbody>
    </Table>
           </div>
          <div className="date flex flex-col gap-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Arrival Date"
        sx={{backgroundColor:"white"}}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params}/>}
      />
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Departure Date"
        sx={{backgroundColor:"white"}}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
        </LocalizationProvider>
          </div>
          <div className="guests flex">
          <Autocomplete
      disablePortal
      id="combo-box-demo"
              options={guests}
              sx={{width:"100%",backgroundColor:"white"}}
      renderInput={(params) => <TextField {...params} label="Choose No. of Guests" />}
      />
          </div>
          <div className="visit flex flex-col gap-4">
            <Button variant="contained" color="success" sx={{fontSize:"17px"}}>Schedule Visit</Button>
            <Button variant="contained" color="success"  sx={{fontSize:"17px"}}>BOOK NOW</Button>
          </div>
          <div className="cancellation">
          Free cancellation within 24 hours of booking. Click here to view <span style={{color:"green"}}>Cancellation Policy</span>
          </div>
          </div>
        </div>
        <div className="right-bottom flex flex-col p-4 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
          <p className="font-bold text-base" style={{color:"green"}}>
            Six reasons to choose RentNest
          </p>
          <div className="reasons flex flex-col gap-4">
            <div className="one flex justify-center items-center gap-4">
              <BsFillPeopleFill style={{ fontSize: "36px",color:"green" }} />
              <span style={{fontSize:"17px"}}>Families, Friends, Couples and Singles welcome</span>
            </div>
            <div className="second flex justify-center items-center gap-4">
              <BsFlower1 style={{ fontSize: "36px",color:"green" }}/>
              <span style={{fontSize:"17px"}}>Free maintenance for first 30 days of stay! T&C</span>
            </div>
            <div className="third flex justify-center items-center gap-4">
              <BsFillBagFill style={{ fontSize: "36px",color:"green" }}/>
              <span style={{fontSize:"17px"}}>Free movement across any property in first 48hrs!</span>
            </div>
            <div className="four flex justify-center items-center gap-4">
              <GiHidden style={{ fontSize: "36px",color:"green" }}/>
              <span style={{fontSize:"17px"}}>No Brokerage, no maintenance and no hidden charges!</span>
            </div>
            <div className="five flex justify-center items-center gap-4">
            <BiTimer style={{ fontSize: "36px",color:"green" }}/>
              <span style={{fontSize:"17px"}}> Flexi rentals and regular rentals</span>
            </div>
            <div className="six flex justify-center items-center gap-4">
              <BsFillHouseAddFill style={{ fontSize: "36px",color:"green" }}/>
              <span style={{fontSize:"17px"}}>Houses furnished and managed by RentMyStay!</span>
            </div>
          </div>
        </div>
   </div>
      <div className="book-small-tab flex fixed  top-1" style={{display:matches?"none":"flex"}}>
      <ButtonToolbar>
          <Button variant="contained" color="success" onClick={() => setOpen(true)}
            sx={{
              width: "200px",
              fontSize: "20px"
            }}>BOOK NOW</Button>
      </ButtonToolbar>
      <Drawer backdrop={backdrop} open={open} onClose={() => setOpen(false)}>

        <Drawer.Body>
        <div className="right flex flex-col gap-5" style={{ width: "24vw",minWidth: "300px",marginTop:matches2?"100%":"0px"}}>
      <div className="right-top flex flex-col" >
        <div className="book-now flex justify-center items-center p-2 rounded-t-xl" style={{backgroundColor:"green",color:"white",fontSize:"16px"}}>
          BOOK NOW TO GET EXCLUSIVE DEALS
        </div>
        <div className="form flex flex-col p-2 gap-3 rounded-xl"  style={{ backgroundColor: "#f8f8f8" }}>
          <div className="rent">
          <Table striped bordered hover size="sm">
            <thead>
            <style type="text/css">
        {`
       .table{
        margin-bottom:0;
       }
    `}
      </style>
        <tr>
          <th className="flex w-full justify-center">Rent</th>
          <th className="text-center">Security Deposit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
                  <td className="p-3 text-center">
                    ₹17000/M
                  </td>
                  <td className="p-3 text-center">
                    ₹10000/M
                </td>
         
        </tr>
      </tbody>
    </Table>
           </div>
          <div className="date flex flex-col gap-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Arrival Date"
        sx={{backgroundColor:"white"}}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params}/>}
      />
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Departure Date"
        sx={{backgroundColor:"white"}}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
        </LocalizationProvider>
          </div>
          <div className="guests flex">
          <Autocomplete
      disablePortal
      id="combo-box-demo"
              options={guests}
              sx={{width:"100%",backgroundColor:"white"}}
      renderInput={(params) => <TextField {...params} label="Choose No. of Guests" />}
      />
          </div>
          <div className="visit flex flex-col gap-4">
            <Button variant="contained" color="success" sx={{fontSize:"17px"}}>Schedule Visit</Button>
            <Button variant="contained" color="success"  sx={{fontSize:"17px"}}>BOOK NOW</Button>
          </div>
          <div className="cancellation">
          Free cancellation within 24 hours of booking. Click here to view <span style={{color:"green"}}>Cancellation Policy</span>
          </div>
          </div>
        </div>
        <div className="right-bottom flex flex-col p-4 rounded-lg" style={{ backgroundColor: "#f8f8f8" }}>
          <p className="font-bold text-base" style={{color:"green"}}>
            Six reasons to choose RentNest
          </p>
          <div className="reasons flex flex-col gap-4">
            <div className="one flex justify-center items-center gap-4">
              <BsFillPeopleFill style={{ fontSize: "36px",color:"green" }} />
              <span style={{fontSize:"17px"}}>Families, Friends, Couples and Singles welcome</span>
            </div>
            <div className="second flex justify-center items-center gap-4">
              <BsFlower1 style={{ fontSize: "36px",color:"green" }}/>
              <span style={{fontSize:"17px"}}>Free maintenance for first 30 days of stay! T&C</span>
            </div>
            <div className="third flex justify-center items-center gap-4">
              <BsFillBagFill style={{ fontSize: "36px",color:"green" }}/>
              <span style={{fontSize:"17px"}}>Free movement across any property in first 48hrs!</span>
            </div>
            <div className="four flex justify-center items-center gap-4">
              <GiHidden style={{ fontSize: "36px",color:"green" }}/>
              <span style={{fontSize:"17px"}}>No Brokerage, no maintenance and no hidden charges!</span>
            </div>
            <div className="five flex justify-center items-center gap-4">
            <BiTimer style={{ fontSize: "36px",color:"green" }}/>
              <span style={{fontSize:"17px"}}> Flexi rentals and regular rentals</span>
            </div>
            <div className="six flex justify-center items-center gap-4">
              <BsFillHouseAddFill style={{ fontSize: "36px",color:"green" }}/>
              <span style={{fontSize:"17px"}}>Houses furnished and managed by RentMyStay!</span>
            </div>
          </div>
        </div>
   </div>
        </Drawer.Body>
      </Drawer>
     </div>
    </div>
  )
}

export default OneHouseComponent

var items = [
    {
         src:"https://ab487509f8decc2c0cd2-9ff2a6143bff296f88e68c3257991f4b.ssl.cf6.rackcdn.com/prop_1653300909..webp"
    },
    {
        src:"https://ab487509f8decc2c0cd2-9ff2a6143bff296f88e68c3257991f4b.ssl.cf6.rackcdn.com/prop_1653300860..webp"
    },
    {
        src:"https://ab487509f8decc2c0cd2-9ff2a6143bff296f88e68c3257991f4b.ssl.cf6.rackcdn.com/prop_1653300861..webp"
    },
    {
        src:"https://ab487509f8decc2c0cd2-9ff2a6143bff296f88e68c3257991f4b.ssl.cf6.rackcdn.com/prop_1653300951..webp"
    }
]

function Item({key,src})
{
    return (
        <div style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "650px",
            height: "500px",
            borderRadius:"10px"
        }} />
    )
}


const iconArray = [
    { name: 'utensils', icon: <Restaurant sx={{fontSize:"35px",color:"green"}} /> },
    { name: 'fridge', icon: <Kitchen sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'balcony', icon: <Balcony sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'elevator', icon: <Elevator sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'smokefree', icon: <SmokeFree sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'lights', icon: <Lightbulb sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'doorbell', icon: <Doorbell sx={{fontSize:"35px",color:"green"}}/> },
  { name: 'wifi', icon: <Wifi sx={{ fontSize: "35px", color: "green" }} /> },
  { name: 'wifi paid', icon: <Wifi sx={{fontSize:"35px",color:"green"}}/> },
  { name: 'tv', icon: <LiveTv sx={{ fontSize: "35px", color: "green" }} /> },
  { name: 'tv paid', icon: <LiveTv sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'bed', icon: <Bed sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'bikeParking', icon: <TwoWheeler sx={{fontSize:"35px",color:"green"}}/> },
  { name: 'curtains', icon: <Curtains sx={{ fontSize: "35px", color: "green" }} /> },
  { name: 'closets', icon: <BiCloset style={{ fontSize: "35px", color: "green" }} /> },
  { name: 'doorbell', icon: <MdDoorbell style={{ fontSize: "35px", color: "green" }} /> },
  { name: 'stove-cylinder', icon: <GiGasStove style={{ fontSize: "35px", color: "green" }} /> },
  { name: 'sofa', icon: <GiSofa style={{ fontSize: "35px", color: "green" }} /> },
  { name: 'AC paid', icon: <AcUnit sx={{ fontSize: "35px", color: "green" }} /> },
  { name: 'pool paid', icon: <MdPool style={{ fontSize: "35px", color: "green" }} /> },
  ];
  
  function IconComponent({ iconName }) {
    const selectedIcon = iconArray.find(icon => icon.name === iconName) || iconArray.find(icon => icon.name === 'other');
  
    return (
      <div className="icon flex flex-col items-center justify-center" style={{backgroundColor:"white",borderRadius:"50px"}}>
        {selectedIcon.icon}
        <span>{selectedIcon.name.toUpperCase()}</span>
      </div>
    );
}
  
const flexi_rent_covers = [
  "Stay for any duration",
  "Ideal if you are looking for short stay or not sure about duration",
  "No lock-in period",
  "Refundable Deposit is Rs.10,000/-",
  "No renovation charges",
  "7 days prior information for extension(There will be Rs 1000 penalty charges if there is extension during notice period)",
  "Pillows, Bed sheets, and Blankets will be provided ( furnished flats only ).",
  "Zero Brokerage charges",
  "Cleaning charges appllicable (1BHK: Rs.400 & 2BHK: Rs.500)",
];

const flexi_rent_not_covers= [
  "Monthly electricity charges",
  "Monthly cooking gas charges",
  "DTH and Wifi/Internet charges",
  "Maid,cleaning etc.charges",
  "Food Service",
  "Any additional furnishing that's not part of the standard package.",
  "Drinking water",
  "Toiletries",
];

const regular_rent_covers = [
  "Stay for specified duration",
  "Three months lock-in period",
  "Refundable Deposit as mentioned",
  "Just 1 month notice period while vacating",
  "Standard amenities as part of booking",
  "Renovation charges applicable (One month rent + service charges deducted)",
  "Maintenance charges",
  "Monthly water charges",
  "Zero Brokerage charges",
  "Wifi charges Rs.1000/m (Rs.1500 for 1st month)"
]

const regular_rent_not_covers = [
  "Pillows, bedsheets and Blankets will not be provided",
  "Monthly electricity charges",
  "Monthly cooking gas charges",
  "DTH and Wifi/Internet charges",
  "Maid, cleaning etc.charges",
  "Food Service",
  "Any additional furnishing that's not part of the standard package.",
  "Drinking water",
  "Toiletries",
]

const placesAndDistances = [
  ["princess square service apartments", 2.00],
  ["tea pavilion service apartment", 2.26],
  ["HighQSuites", 2.63],
  ["Flagship New Guest Inn Near Nexus Mall Koramangala", 2.88],
  ["Nobel Rose Service Apartment", 2.95],
];

const guests = [1, 2, 3, 4];
