import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Home from "./Home/Home"
import CouponPage from "./coupons/CouponPage";
import SideBar from "./SideBar";
import ProfilePage from "./profile/ProfilePage";


const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("Home");


    return (

        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Box>

            <Box p={2} sx={{ overflowY: "auto", height: "82.8vh", flex: 2 }}>
                {selectedCategory === 'Home' ? <Home /> : null}
                {selectedCategory === 'Coupons' ? <CouponPage /> : null}
                {selectedCategory === 'Profile' ? <ProfilePage /> : null}

            </Box>
        </Stack>
    );
};

export default Feed;