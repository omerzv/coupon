
import { Stack, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { logo } from '../utils/constans';
import LoginButton from "./authArea/LoginButton"

import LogoutButton from './authArea/LogoutButton';
import { useSelector } from 'react-redux'



const NavBar = () => {
  var token=useSelector(state=>state.auth.token)
 

  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#293241', top: 0, justifyContent: "space-between" }} >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Typography fontFamily="cursive" variant='h1' sx={{ color: "#ee6c4d" }}>
        Coupons-Shop
      </Typography>

      {token === '' ? <LoginButton /> : <LogoutButton />}

    </Stack>
  )
};

export default NavBar

