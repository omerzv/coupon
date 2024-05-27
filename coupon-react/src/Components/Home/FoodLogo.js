
import { Typography, Box, Grid } from "@mui/material";
import React from 'react'
import Pizza from '../../res/pizzal.png'
import Burger from '../../res/burger.jpg'
import Sushi from '../../res/sushi.jpg'
import Falafel from '../../res/falafel.jpg'

const FoodLogo = () => {
  return (
    <Box sx={{pl:10}} >
      <Typography fontFamily="cursive" variant="h4" color={"whitesmoke"} sx={{ mb: 10,mr:10 }} textAlign="center">
        The best food
        
      </Typography>
      <Grid container >
                <Grid >
                    <img src={Pizza} alt="logo" height={150} />
                </Grid>
                <Grid>
                    <img src={Burger} alt="logo" height={150} />
                </Grid>
                <Grid >
                    <img src={Sushi} alt="logo" height={150} />
                </Grid>
                <Grid >
                    <img src={Falafel} alt="logo" height={150} />
                </Grid>
            </Grid>


    </Box>
  )
}

export default FoodLogo