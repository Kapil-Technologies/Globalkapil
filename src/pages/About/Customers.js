import React from 'react'
import { NavDiv } from '../Home';
import Page from '../../components/Page';
import { Grid } from '@mui/material';

function Customers() {
  return (
    <div>
          <NavDiv>.</NavDiv>
          <Page name="Our Customers" content="" />
      <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>1</p>
        <p>2</p>
        <p>3</p>

      </Grid>
    </div>
  );
}

export default Customers
