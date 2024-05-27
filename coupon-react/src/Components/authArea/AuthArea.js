import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import SideBar from "../SideBar";
import AuthSideBar from "./AuthSideBar";

import LoginArea from "./LoginArea";
import SignInArea from "./SignInArea";

const AuthArea = () => {
  const [selectedCategory, setSelectedCategory] = useState("Login");
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}>
        <AuthSideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 4, ml: 16, mt: 8 }}>
      {selectedCategory === 'Login' ? <LoginArea /> : null}
      {selectedCategory === 'Sign-In' ? <SignInArea /> : null}
      </Box>
    </Stack>
  );
};

export default AuthArea;
