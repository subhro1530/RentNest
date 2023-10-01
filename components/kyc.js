import { Autocomplete, Button, TextField, useMediaQuery } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Kyc = () => {
  const nonTab = useMediaQuery('(min-width:750px)');
  const [value, setValue] = React.useState(null);

  return (
      <div className="Kyc flex flex-col w-full justify-center items-center" style={{gap:"3vh",paddingBottom:"2vh"}}>
       <div className="topic       flex  justify-center items-center" style={{backgroundColor:"rgba(0,0,0,0.2",width:"80vw"}}>
              <p style={{fontSize:"7vh",color:"green"}}>Know Your Customer</p>
      </div>
      <div className="please text-center">
        <p style={{fontSize:"20px",color:"green"}}>
          Please fill up your details so that we can ensure a smooth experience for you as well as the owner
        </p>
      </div>
      <div className={`form flex ${!nonTab ? "flex-col items-center " : ""}`} style={{width:"97vw",justifyContent:"space-evenly"}}>
        <div className="part-one gap-4 flex flex-col">
        <div className="photo">
              <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{width:"328px"}}>
              Upload Your Photo
             <VisuallyHiddenInput type="file" sx={{width:"328px"}}/>
             </Button>
        </div>
        <div className="emergency">
        <TextField id="outlined-basic" label="Your Emergency number" variant="outlined" sx={{width:"328px"}}/>
        </div>
        <div className="birth">
        <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DatePicker
        label="Your Date of Birth"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
              }}
              sx={{width:"328px"}}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
        </div>
        <div className="gender" style={{width:"328px"}}>
        <FormControl sx={{width:"100%"}}>
      <FormLabel id="demo-row-radio-buttons-group-label">Your Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
               sx={{display:"flex",justifyContent: 'space-between'}}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Others" />
      </RadioGroup>
    </FormControl>
        </div>
        <div className="address">
        <TextField
          id="outlined-textarea"
          label="Your street address"
          multiline
            rows={2}
            sx={{width:"328px"}}
        />
        </div>
        <div className="state">
          {/* <p style={{fontSize:"17px"}}>
            Your State
          </p> */}
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={states}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Your State" sx={{width:"328px"}}/>}
      />
        </div>
        <div className="pincode">
        <TextField id="outlined-basic" label="Your Pin Code" variant="outlined" sx={{width:"328px"}}/>
        </div>
        </div>
        <div className="part-two flex flex-col gap-4 justify-between">
        <div className="aadhar">
        <TextField id="outlined-basic" label="Your Aadhar Card No." variant="outlined" sx={{width:"328px"}}/>
          </div>
          <div className="upload-a">
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{width:"328px"}}>
              Upload Your Aadhar Card Photo
             <VisuallyHiddenInput type="file" />
             </Button>
        </div>
        <div className="pan">
        <TextField id="outlined-basic" label="Your Pan Card No." variant="outlined" sx={{width:"328px"}}/>
        </div>
        <div className="upload-p">
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{width:"328px"}}>
              Upload Your Pan Card Photo
             <VisuallyHiddenInput type="file" />
             </Button>
          </div>
          <div className="with" style={{width:"328px"}}>
        <FormControl sx={{width:"100%"}}>
      <FormLabel id="demo-row-radio-buttons-group-label">You'r Staying With</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{display: 'flex',justifyContent: 'space-between'}}
      >
        <FormControlLabel value="single" control={<Radio />} label="Single" />
        <FormControlLabel value="friends" control={<Radio />} label="Friends" />
        <FormControlLabel value="family" control={<Radio />} label="Family" />
      </RadioGroup>
    </FormControl>
        </div>
        <div className="income">
          {/* <p style={{ fontSize: "17px" }}>Your Annual Income</p> */}
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={income}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Your Annual Income" sx={{width:"328px"}}/>}
      />
        </div>
        <div className="nature">
          {/* <p style={{ fontSize: "17px" }}>Your Stay Tenure</p> */}
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={stay}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Your Tenure Type" sx={{width:"328px"}}/>}
      />
        </div>
        </div>
          </div>
    </div>
  )
}
const states = [
  { label: 'Andhra Pradesh', id: 1 },
  { label: 'Arunachal Pradesh', id: 2 },
  { label: 'Assam', id: 3 },
  { label: 'Bihar', id: 4 },
  { label: 'Chhattisgarh', id: 5 },
  { label: 'Goa', id: 6 },
  { label: 'Gujarat', id: 7 },
  { label: 'Haryana', id: 8 },
  { label: 'Himachal Pradesh', id: 9 },
  { label: 'Jammu and Kashmir', id: 10 },
  { label: 'Jharkhand', id: 11 },
  { label: 'Karnataka', id: 12 },
  { label: 'Kerala', id: 13 },
  { label: 'Madhya Pradesh', id: 14 },
  { label: 'Maharashtra', id: 15 },
  { label: 'Manipur', id: 16 },
  { label: 'Meghalaya', id: 17 },
  { label: 'Mizoram', id: 18 },
  { label: 'Nagaland', id: 19 },
  { label: 'Odisha', id: 20 },
  { label: 'Punjab', id: 21 },
  { label: 'Rajasthan', id: 22 },
  { label: 'Sikkim', id: 23 },
  { label: 'Tamil Nadu', id: 24 },
  { label: 'Telangana', id: 25 },
  { label: 'Tripura', id: 26 },
  { label: 'Uttarakhand', id: 27 },
  { label: 'Uttar Pradesh', id: 28 },
  { label: 'West Bengal', id: 29 },
];

const income = [
  { label: '<3 Lakh', id: 1 },
  { label: '3-5 Lakh', id: 2 },
  { label: '5-10 Lakh', id: 3 },
  { label: '>10 Lakh', id: 4 },
];

const stay = [
  { label: "Permanent", id: 1 },
  { label: "Temporary", id: 2 },
];

export default Kyc