
import React from 'react'
import { Typography, Grid, Box } from "@mui/material";
import Hotel from '../../res/hotel.png'
import Museum from '../../res/museum.jpg'
import Standup from '../../res/standup.png'
import MusicFastival from '../../res/musicFestival.png'
const AtrLogo = () => {
    return (
        <Box sx={{pl:10}} >
            <Typography fontFamily="cursive" variant="h4" color={"whitesmoke"} sx={{ mb: 10,mr:"50%"}} textAlign="center">
                Fun Attractions
            </Typography>

            <Grid container rowSpacing={0} columnSpacing={{ sm: 2, md: 3 }}>
                <Grid >
                    <img src={Hotel} alt="logo" height={150} />
                </Grid>
                <Grid>
                    <img src={Museum} alt="logo" height={150} />
                </Grid>
                <Grid  sx={{ ml: 5 }}>
                    <img src={Standup} alt="logo" height={150} />
                </Grid>
                <Grid >
                    <img src={MusicFastival} alt="logo" height={150} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default AtrLogo