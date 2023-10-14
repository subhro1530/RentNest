"use client"

import { Apartment, Balcony, Bed, Chair, Curtains, Doorbell, Elevator, Kitchen, Lightbulb, LiveTv, Map, Place, Restaurant, SmokeFree, TwoWheeler, Wifi } from '@mui/icons-material'
import { Paper } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const OneHouseComponent = () => {

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <div className="one-house flex w-full">
          <div className="left flex flex-col gap-3" >
              <div className="top flex flex-col gap-3" style={{ width: "650px",padding:"10px",border:"1px solid black",padding:"20px" }}>
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
              <div className="middle">
                  Home  / Bangalore /  Whitefield  /  1BHK Fully Furnished Home in Bangalore
              </div>
              <div className="carousel">
              <Carousel>
            {
                items.map( (item, i) => <Item key={i} src={item.src} /> )
            }
              </Carousel>
              </div>
              <div className="note p-2" style={{backgroundColor:"#f8f8f8"}}>
                  <span className="font-bold">Please Note:</span>
                  <p>The furniture and furnishings may appear different from what’s shown in the pictures. Dewan/sofa may be provided as available.</p>
              </div>
              <div className="note2 p-2" style={{backgroundColor:"#f8f8f8"}}>
                  <span className="font-bold">Certified COVID Safe</span>
                  <p>All our houses are cleaned and fully sanitized by our staff before you move in or visit any of our houses in-person.</p>
              </div>
              <div className="tabs">
              <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Amenities" {...a11yProps(0)} />
          <Tab label="Amenities Not Available" {...a11yProps(1)} />
          <Tab label="Paid Amenities" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
                          <div className="amenities flex flex-wrap gap-12">
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
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
              </div>
          </div>

          <div className="right"></div>
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
            height: "500px",
            width:"auto"
        }} />
    )
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
  
const iconArray = [
    { name: 'utensils', icon: <Restaurant sx={{fontSize:"35px",color:"green"}} /> },
    { name: 'fridge', icon: <Kitchen sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'balcony', icon: <Balcony sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'elevator', icon: <Elevator sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'smokefree', icon: <SmokeFree sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'lights', icon: <Lightbulb sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'doorbell', icon: <Doorbell sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'wifi', icon: <Wifi sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'tv', icon: <LiveTv sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'bed', icon: <Bed sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'bikeParking', icon: <TwoWheeler sx={{fontSize:"35px",color:"green"}}/> },
    { name: 'curtains', icon: <Curtains sx={{fontSize:"35px",color:"green"}}/> },
  ];
  
  function IconComponent({ iconName }) {
    const selectedIcon = iconArray.find(icon => icon.name === iconName) || iconArray.find(icon => icon.name === 'other');
  
    return (
      <div className="icon flex flex-col items-center justify-center">
        {selectedIcon.icon}
        <span>{selectedIcon.name.toUpperCase()}</span>
      </div>
    );
  }