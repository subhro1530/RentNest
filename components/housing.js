import { Button } from '@mui/material'
import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import HouseCard from './houseCard';

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 28,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const HousingComponent = () => {
  return (
      <div className="housing flex gap-2" style={{backgroundColor:"#f8f8f8"}}>
          <div className="sort flex flex-col" style={{width:"250px",backgroundColor:"white"}}>
              <div className="sorted-by flex justify-center items-center gap-4" style={{
                  borderBottom: "1px solid gray",
                  padding: "16px",
              }}>
                  <p style={{fontSize:"20px",fontWeight:"bold",color:"#040720"}}>Sorted By</p>
                  <Button variant="contained" color="error" size="medium" sx={{marginTop:"4.5px"}}>Clear All</Button>
              </div>
              <div className="first flex w-full flex-col justify-center items-baseline" style={{
                  borderBottom: "1px solid gray",
                  padding: "12px 0px",
              }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
            name="radio-buttons-group"
            sx={{marginLeft:"40px"}}
      >
                      <FormControlLabel value="reco" control={
                          <Radio sx={{
          color: "green",
          '&.Mui-checked': {
            color: "green",
          },
        }}/>} label="Recommended" />
                      <FormControlLabel value="dis" control={
                          <Radio sx={{
          color: "green",
          '&.Mui-checked': {
            color: "green",
          },
        }}/>} label="Distance" />
                      <FormControlLabel value="hl" control={
                          <Radio  sx={{
                            color: "green",
                            '&.Mui-checked': {
                              color: "green",
                            },
                          }}/>} label="Price High to Low" />
                      <FormControlLabel value="lh" control={
                          <Radio sx={{
          color: "green",
          '&.Mui-checked': {
            color: "green",
          },
        }}/>} label="Price Low to High" />
      </RadioGroup>
              </div>
              <div className="second flex flex-col justify-center items-baseline" style={{
                  borderBottom: "1px solid gray",
                  padding: "12px 0px",
              }}>
              <FormControl  sx={{marginLeft:"40px"}}>
  <FormLabel id="demo-radio-buttons-group-label"><p style={{fontWeight:"bold",fontSize:"20px",marginBottom:"12px",color:"black",}}>Filters</p> </FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
              name="radio-buttons-group"
  >
                          <FormControlLabel value="one" control={
                              <Radio sx={{
                                color: "green",
                                '&.Mui-checked': {
                                  color: "green",
                                },
                              }}/>} label="Daily" />
                          <FormControlLabel value="two" control={
                              <Radio sx={{
                                color: "green",
                                '&.Mui-checked': {
                                  color: "green",
                                },
                              }}/>} label="Regular Rent" />
                          <FormControlLabel value="three" control={
                              <Radio sx={{
                                color: "green",
                                '&.Mui-checked': {
                                  color: "green",
                                },
                              }}/>} label="Flexi Rent" />
  </RadioGroup>
</FormControl>
              </div>
              <div className="third flex flex-col justify-center items-baseline"  style={{
                  borderBottom: "1px solid gray",
                  padding: "12px 0px",
              }}>
        <Typography gutterBottom sx={{fontWeight:"bold",fontSize:"20px",marginBottom:"12px",color:"black",}}>Price Range(in K) </Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
            defaultValue={20}
            min={5}
            max={100}
            sx={{marginLeft:"40px",width:"70%"}}
      />
              </div>
              <div className="fourth flex flex-col justify-center items-baseline" style={{
                  borderBottom: "1px solid gray",
                  padding: "12px 0px",
              }}>
              <FormControl  sx={{marginLeft:"40px"}}>
  <FormLabel id="demo-radio-buttons-group-label"><p style={{fontWeight:"bold",fontSize:"20px",marginBottom:"12px",color:"black"}}>Furnished Type</p> </FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
                          <FormControlLabel value="one" control={
                              <Radio sx={{
                                color: "green",
                                '&.Mui-checked': {
                                  color: "green",
                                },
                              }}/>} label="Fully Furnished" />
                          <FormControlLabel value="two" control={
                              <Radio sx={{
                                color: "green",
                                '&.Mui-checked': {
                                  color: "green",
                                },
                              }}/>} label="Semi Furnished" />
  </RadioGroup>
</FormControl>
              </div>
              <div className="fifth flex flex-col justify-center items-baseline" style={{
                  borderBottom: "1px solid gray",
                  padding: "12px 0px",
              }}>
              <FormControl  sx={{marginLeft:"40px"}}>
  <FormLabel id="demo-radio-buttons-group-label"><p style={{fontWeight:"bold",fontSize:"20px",marginBottom:"12px",color:"black"}}>Room Type</p> </FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
                          <FormControlLabel value="one" control={
                              <Radio sx={{
                                color: "green",
                                '&.Mui-checked': {
                                  color: "green",
                                },
                              }}/>} label="Studio" />
                          <FormControlLabel value="two" control={
                              <Radio sx={{
                                color: "green",
                                '&.Mui-checked': {
                                  color: "green",
                                },
                              }}/>} label="1BHK" />
                          <FormControlLabel value="three" control={
                              <Radio sx={{
                                color: "green",
                                '&.Mui-checked': {
                                  color: "green",
                                },
                              }}/>} label="2BHK" />
  </RadioGroup>
</FormControl>
              </div>
      </div>
      <div className="houses">
        <HouseCard/>
      </div>
    </div>
  )
}

export default HousingComponent