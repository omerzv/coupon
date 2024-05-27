import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';
import  NavBar from "./Components/NavBar"
import  Feed from './Components/Feed';
import AuthArea from "./Components/authArea/AuthArea"
import createInterceptors from './service/InterceptorsService';
import EditCoupon from './Components/profile/Company/EditCoupon';


createInterceptors()
const App = () => {
    return(
    <BrowserRouter>
        <Box sx={{ backgroundColor: '#293241' }}>
            <NavBar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/login' exact element={<AuthArea />} />
                <Route path='/Edit' exact element={<EditCoupon />} />
            </Routes>
        </Box>
    </BrowserRouter>
)};
export default App
