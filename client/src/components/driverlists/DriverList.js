import React, {useState, useRef} from 'react'
import DriverListItem from './DriverListItem'
import { Close, Send } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';

import { useValue } from '../../context/contextProvider';
const DriverList = () => {
  const [open, setOpen] = useState(false);
  const {
    state: {driver},
    dispatch,
  } = useValue();
  const name_driverRef= useRef();
  const idNoRef= useRef();
  const phoneRef= useRef();
  const url_driverRef = useRef();
  const emailRef= useRef();

  const handleOpen = () => {
    setOpen(true);

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    const name_driver= name_driverRef.current.value;
    const idNo= idNoRef.current.value;
    const phNo= phoneRef.current.value;
    const url_driver=  url_driverRef.current.value;
    const email=emailRef.current.value;

    dispatch({type:'ADD_DRIVER', payload:{name_driver, idNo, phNo, url_driver, email}})
    
    setOpen(false)
  };
 const handleClose=()=>{
    setOpen(false);
 }
  return (
    <>
    <div className='row' style={{margin:"5%"}}>
       
        {driver.map((driverItem, index)=>(
          <div className='col-md-4 col-sm-6'>
          <DriverListItem
          key={index}
          name={driverItem.name_driver}
          idNo={driverItem.idNo}
          phNo={driverItem.phNo}
          url={driverItem.url_driver}
          email={driverItem.email}
          />
           </div>
        ))}
        
        
    </div>
    <div className="text-center jumbotron">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Click Here To Add New Driver
        </Button>
        
    </div>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Driver Details
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleFormSubmit}>
        <DialogContent dividers>
          <DialogContentText>
            Please fill your information in the fields below:
          </DialogContentText>
          
            <TextField
              autoFocus
              margin="normal"
              variant="standard"
              id="name_driver"
              label="Name"
              type="text"
              fullWidth
              inputRef={name_driverRef}
              inputProps={{ minLength: 2, autoComplete: "off"  }}
              required
            />
          
          <TextField
            
            margin="normal"
            variant="standard"
            id="idNo"
            label="Id No."
            type="text"
            fullWidth
            inputRef={idNoRef}
            inputProps={{autoComplete: "off"  }}
            required
          />

            <TextField
              
              margin="normal"
              variant="standard"
              id="phNo"
              label="Mobile No."
              type="text"
              fullWidth
              inputRef={phoneRef}
              inputProps={{ minLength: 2, autoComplete: "off"  }}
              required
            />
            <TextField
              margin="normal"
              variant="standard"
              id="url_driver"
              label="URL"
              type="url" 
              fullWidth
              inputRef={url_driverRef}
              inputProps={{ autoComplete: "off"  }}
              />

            <TextField
              margin="normal"
              variant="standard"
              id="email"
              label="Email"
              type="email"
              fullWidth
              inputRef={emailRef}
              inputProps={{autoComplete: "off"  }}
              required
            />
          
         
        </DialogContent>
        <DialogActions sx={{ px: '19px' }}>
          <Button type="submit" variant="contained" endIcon={<Send />} >
            Submit
          </Button>
        </DialogActions>
      </form>
      
    </Dialog>

    </>

  )
}

export default DriverList
