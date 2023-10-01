import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import 'rsuite/dist/rsuite.min.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton } from '@mui/material' ;
import AngleDownIcon from '@rsuite/icons/legacy/AngleDown';
import { Drawer, ButtonToolbar,  Placeholder } from 'rsuite';
import useMediaQuery from '@mui/material/useMediaQuery';

const SearchNav = () => {
    const nonTab = useMediaQuery('(min-width:1012px)');
    const [value, setValue] = React.useState(null);

    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
  
    const handleOpen = key => {
      setOpen(true);
      setPlacement(key);
    };
  return (
      <div className="flex  items-center justify-around" style={{height:"12vh",borderBottom:"2px solid black"}}>
      <div className="city">
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={bangaloreCities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose City" />}
      />
      </div>
      <div className="dates flex gap-2" style={{display:nonTab?"flex":"none"}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Arrival Date"
        
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Departure Date"
        
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
        </LocalizationProvider>
      </div>
      <div className="search1 flex" style={{display:nonTab?"flex":"none"}}>
        <SearchIcon fontSize="large"
          sx={{
            padding: "8px",
            color: "white", backgroundColor: "black", borderRadius: "30px", height: "50px", width: "50px"
          }} />
      </div> 
      <div className="search2" style={{display:nonTab?"none":"block"}}>
      <IconButton onClick={() => handleOpen('top')}>
      <SearchIcon fontSize="large"
          sx={{
            padding: "8px",
            color: "white", backgroundColor: "black", borderRadius: "30px", height: "50px", width: "50px"
          }} />
      </IconButton>
         
      <Drawer placement={placement} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title></Drawer.Title>
            <Drawer.Actions>
              <div className="flex gap-2">
                <Button variant="contained" color="success" onClick={() => setOpen(false)}>Confirm </Button>
                </div>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
        <div className="dates flex gap-2 w-full justify-around" >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Arrival Date"
       
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Departure Date"
        
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
        </LocalizationProvider>
      </div>
        </Drawer.Body>
      </Drawer>
      </div>      
      <div className="logout">
      <Button variant="contained" color="secondary">Logout</Button>
      </div>
  
    </div>
  )
}
const bangaloreCities = [
    { label: 'Koramangala', id: 1 },
    { label: 'HSR Layout', id: 2 },
    { label: 'Electronic City', id: 3 },
    { label: 'Bellandur', id: 4 },
    { label: 'Indiranagar', id: 5 },
    { label: 'JP Nagar', id: 6 },
    { label: 'BTM Layout', id: 7 },
    { label: 'Domlur', id: 8 },
    { label: 'Basavanagudi', id: 9 },
    { label: 'Malleshwaram', id: 10 }
  ];

export default SearchNav