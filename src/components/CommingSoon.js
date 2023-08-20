import { Button, Stack } from '@mui/material';
import React from 'react'
import Comming from '../assets/Banners/CommingSoon.png'
import { Link } from 'react-router-dom';

function CommingSoon() {
  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%", height: "300px", textAlign: "center",py:12 }}

      >
        <img src={Comming} alt="Comming Soon" height="500px" width="1000px" />

       
      </Stack>
    </div>
  );
}

export default CommingSoon
