import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    maxWidth: 300,
    // padding: 20,
    backgroundColor: '#f1f3f4',
    borderRadius: 5,
  },
  media: {
    marginBottom: 20, 
    textAlign: 'center',
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    margin: 0,
  },
  id: {
    fontSize: 24,
    fontWeight: 700,
    margin: 0,
    color: '#14828c',
  },
  description: {
    marginBottom: 20,
  },
  content: {
    fontSize: 14,
    color: '#787878',
    fontWeight: 500,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  primaryButton: {
    backgroundColor: '#ff0000',
    marginRight: 10,
    color: '#fff',
    borderRadius: 3,
    textTransform: 'none',
  },
  secondaryButton: {
    backgroundColor: '#ffff00',
    color: '#fff',
    borderRadius: 3,
    textTransform: 'none',
  },
}));

const DriverListItem = ({key, name, idNo, phNo, url, email}) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.card} >
      <CardMedia
        className={classes.media}
        image={url}
        alt=""
      />
      <CardContent>
        <div className={classes.header}>
          <Typography variant="h6" className={classes.name}>
            {name}
          </Typography>
          <Typography variant="h6" className={classes.id}>
            Id:{idNo} 
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography variant="body2" className={classes.content}>
            Phone No:{phNo}
          </Typography>
          <Typography variant="body2" className={classes.content}>
            Email Id:{email}
          </Typography>
        </div>
        <div className={classes.buttonContainer}>
          <Button variant="contained" className={classes.primaryButton} style={{ backgroundColor: 'red' }}>
            Delete
          </Button>
          <Button variant="contained" className={classes.secondaryButton} style={{ backgroundColor: '#FDDA0D' }}>
            Update
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverListItem;
