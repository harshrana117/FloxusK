import React from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

function SlideTransition(props) {
  return <Slide {...props} direction='up' />;
}

const Snackbar = ({ open = false, handleClose, message }) => {
  return (
    <MuiSnackbar
      open={open}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      message={message}
    />
  );
};

export default Snackbar;
