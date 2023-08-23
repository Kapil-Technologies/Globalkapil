import React, { useState } from 'react'
import { NavDiv } from './Home'
import Page from '../components/Page'
import CommingSoon from '../components/CommingSoon'
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack, Typography, keyframes } from '@mui/material';

const menu = keyframes`

`

export const HLine = styled(Stack)(({ theme }) => ({
  width: 30,
  height: 300,
  animation: "fadeIn 1s ease-in forwards, fadeout 5s 1s ease out forwards",
  "@keyframes fadeIn": {
    "100%": {
      opacity: 1,
    },
  },

  "@keyframes fadeout": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
}));

function Consulting() {
  const [hover, setHover] = useState(false)

  const MouseEnter = () => {
    setHover(true)
  }

  const MouseLeave = () => {
    setHover(false)
  }
  
  
  
  return (
    <div>
      <Page name="Solutions" />
      <NavDiv>.</NavDiv>
      <CommingSoon />

    </div>
  );
}

export default Consulting
