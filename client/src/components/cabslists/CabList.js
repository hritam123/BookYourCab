import React, {useState, useRef} from 'react'
import CabListItem from './CabListItem'
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
const CabList = () => {
  const [open, setOpen] = useState(false);
  const {
    state: {cab},
    dispatch,
  } = useValue();
  const name_cabRef= useRef();
  const regNoRef= useRef();
  const colorRef= useRef();
  const url_cabRef = useRef();
  const priceRef= useRef();

  const handleOpen = () => {
    setOpen(true);

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    const name_cab= name_cabRef.current.value;
    const regNo= regNoRef.current.value;
    const color= colorRef.current.value;
    const url_cab=url_cabRef.current.value;
    const price=priceRef.current.value;

    dispatch({type:'ADD_CAB', payload:{name_cab, regNo, color, url_cab, price}})
    
    setOpen(false)
  };
 const handleClose=()=>{
    setOpen(false);
 }
  return (
    <>
    <div className='row' style={{margin:"5%"}}>
       
        {cab.map((cabItem, index)=>(
          <div className='col-md-4 col-sm-6'>
          <CabListItem
          key={index}
          name={cabItem.name_cab}
          regNo={cabItem.regNo}
          color={cabItem.color}
          url={cabItem.url_cab}
          price={cabItem.price}
          />
           </div>
        ))}
        
        
    </div>
    <div className="text-center jumbotron">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Click Here To Add New Car
        </Button>
        
    </div>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Cab Details
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
              id="name"
              label="Name"
              type="text"
              fullWidth
              inputRef={name_cabRef}
              inputProps={{ minLength: 2, autoComplete: "off"  }}
              required
            />
          
          <TextField
            
            margin="normal"
            variant="standard"
            id="regNo"
            label="Registration No."
            type="text"
            fullWidth
            inputRef={regNoRef}
            inputProps={{ autoComplete: "off"  }}
            required
          />

            <TextField
              
              margin="normal"
              variant="standard"
              id="color"
              label="Color"
              type="text"
              fullWidth
              inputRef={colorRef}
              inputProps={{ minLength: 2, autoComplete: "off"  }}
              required
            />
            <TextField
              margin="normal"
              variant="standard"
              id="url"
              label="URL"
              type="url" 
              fullWidth
              inputRef={url_cabRef}
              inputProps={{ autoComplete: "off"  }}
              />

            <TextField
              margin="normal"
              variant="standard"
              id="price"
              label="Price"
              type="text"
              fullWidth
              inputRef={priceRef}
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

export default CabList
