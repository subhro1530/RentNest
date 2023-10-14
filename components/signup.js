import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import emailjs from '@emailjs/browser'
import { useRouter } from 'next/navigation';
import ClipLoader from "react-spinners/ClipLoader";
import Modal from '@mui/material/Modal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useMediaQuery from '@mui/material/useMediaQuery';
  
const SignupComponent = () => {
  const matches = useMediaQuery('(min-width:450px)');

  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = React.useState({
      email: "",
      password: "",
      username: "",
      userLastName:"",
      contact: "",
      userType:""
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
 
  const handleClose=()=>{setLoading(false)}

  async function mail(token) {
      const mailresponse = await emailjs.send(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID, process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID, {
          to_email: user.email,
          domain: process.env.NEXT_PUBLIC_DOMAIN,
          token: token,
          to_name:user.username,
          todo:"verify your email"
      }, process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY)
  }

  const onSignup = async () => {
      try {
          setLoading(true);
          const response = await fetch("/api/users/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(user)
          });
          const data = await response.json();
          await mail(data.token);
        console.log("Signup success", data);
        toast.success("Signup successful!")
          router.push("/login");
          
      } catch (error) {
          console.log("Signup failed", error.message);
          
          toast.error("Signup failed!");
      }finally {
          setLoading(false);
      }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0 && user.contact.length > 0
      && user.userType.length > 0) {
      setButtonDisabled(false);
      console.log(buttonDisabled)
      } else {
          setButtonDisabled(true);
      }
  }, [user]);


    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

  return (
    <div className="flex flex-col "
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "5px",
        gap: "8px",
        paddingTop: "0px",
        textAlign: "center",
        width: matches ? "400px" : "85vw",
        position: "relative"
      }}>
      <p style={{
        color: "orange",
        fontSize: "25px",
        fontWeight: "bold",
      }}>Welcome to RentNest</p>
          <div className="name flex gap-1">
              <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{
                  width: "200px"
        }}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
              <TextField id="outlined-basic" label="Last Name" variant="outlined" sx={{
                  width: "200px"
        }}
          onChange={(e) => setUser({ ...user, userLastName: e.target.value })}
        />
          </div>
          <div className="contact relative">
             <TextField id="outlined-basic" label="Contact Number" variant="outlined" sx={{
                  width: "100%"
        }}
          onChange={(e) => setUser({ ...user, contact: e.target.value })}
        />
          </div>
          <div className="email relative">
          <TextField id="outlined-basic" label="Email" variant="outlined" sx={{
                  width: "100%"
        }}
        onChange={(e) => setUser({...user, email: e.target.value})}/>
          </div>
          <div className="password relative">
          <FormControl sx={{  width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setUser({...user, password: e.target.value})}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          </div>
          <div className="tenant flex items-center justify-evenly">
              I am a
        <RadioGroup
         onChange={(e) => setUser({...user, userType: e.target.value})}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
              >
        <FormControlLabel value="Tenant" control={<Radio />} label="Tenant" />
        <FormControlLabel value="Owner" control={<Radio />} label="Owner" />

      </RadioGroup>
          </div>
          <div className="signup relative">
              <Button variant="contained" color="success"
                  sx={{
                  width:"100%"
          }}
          disabled={buttonDisabled}
          onClick={onSignup}
        >Sign Up !</Button>
      </div>
      <div className="logged-user" style={{fontSize:"20px"}}>
        Already have an account ? <a href="/login" style={{color:"blue",textDecoration:"none"}}>Login</a>
      </div>
      <ToastContainer />
      <Modal
        open={loading}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <ClipLoader color="white" /> */}
        <p style={{color:"white"}}>Processing....</p> 
      </Modal>
    </div>
  )
}

export default SignupComponent;