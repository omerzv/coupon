import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("./login")

  }
  return (
    <div>
      <button
        onClick={() => { handleOnClick() }}
        style={{
          // background: "#FC1503",
          color: "white",
        }}
        className='prime-btn'
        key="d"
      >
        <span style={{ color: "white", marginRight: "15px" }}>
          <LoginIcon />
        </span>
        Login
      </button>
    </div>
  )
}

export default LoginButton