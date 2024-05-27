import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/authSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import { clearState } from '../../Redux/couponSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(logout())
    dispatch(clearState())
  }

  return (
    <div>
      <button
        className='prime-btn'
        onClick={() => { handleOnClick() }}
        style={{
          // background: "#FC1503",
          color: "white",
        }}
        key="d"
      >
        <span style={{ color: "white", marginRight: "15px" }}>
          <LogoutIcon />
        </span>

        logout

      </button>
    </div>
  )
}

export default LogoutButton