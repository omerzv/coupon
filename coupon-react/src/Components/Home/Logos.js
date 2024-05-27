import { Stack,Divider } from '@mui/material'
import React from 'react'
import FoodLogo from './FoodLogo'
import AtrLogo from './AtrLogo'

const Logos = () => {
  return (
    <Stack  direction="row" spacing={1}
    divider={<Divider orientation="vertical" 
    sx={{ bgcolor: "white"}}flexItem  />}
    sx={{mt:20,ml:5}}>
      <FoodLogo />
      <AtrLogo />
      
    </Stack>
  )
}

export default Logos