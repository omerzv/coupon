
import { Typography, Stack } from "@mui/material";

import Logos from './Logos';

const Home = () => {
    return (
        <Stack >
            <Typography fontFamily="cursive" variant="h4" color={"whitesmoke"} align="justify" sx={{ml:40}}>
                This website provide coupons in the best categories!
            </Typography>
            <Logos/>
            <Typography fontFamily="cursive" variant="h5" color={"whitesmoke"} align="justify" sx={{ml:'38%',mt:10}}>
               And much more!
            </Typography>
        </Stack>
    )
}

export default Home