import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import authService from '../../service/AuthService';

const SignInArea = () => {
    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState("");

    const send = async(data) => {
        console.log(data.password);
        var addClient;
        if (data.clientType === "Company") {
          addClient = {
            id: null,
            email: data.email,
            password: data.password,
            name: data.name,
          }
          await authService.CompanySignIn(addClient)
          
        }
        else {
          var arr = data.name.split(' ')
          addClient = {
            id: null,
            email: data.email,
            password: data.password,
            lastName: arr.pop(),
            firstName: arr.join(" ")
          }
          await authService.CustomerSignIn(addClient)
        }
        
      }
  return (
    <Box style={{ display: "flex", justifyContent: "center" }} margin={10} marginLeft={1} sx={{ boxShadow: '0 0 20px #8ecae6 ', maxWidth: "500px", borderRadius: '20px' }} >
      <form onSubmit={handleSubmit(send)} >
        <label className='lbl-message'>{message}</label>
        <br></br>
        <label>Name</label>
        <input className='tx-main' style={{ marginLeft: "50px" }} required {...register("name")}></input>
        <br></br>
        <label>Email</label>
        <input className='tx-main' style={{ marginLeft: "50px" }} type={'email'} required {...register("email")} ></input>
        <br></br>
        <label>Password</label>
        <input className='tx-main' style={{ marginLeft: "20px" }} type={'password'} required {...register("password")}></input>
        <br></br>
        <label>Select Client Type</label>
        <select className='tx-main' style={{ width: "200px", marginBottom: "15px" }} required {...register("clientType")}>
          <option value="Customer">Customer</option>
          <option value="Company">Company</option>
        </select>
        <br></br>
        <input className='sec-btn' type={'submit'} style={{ marginTop: "15px" }} onClick={handleSubmit}></input>
      </form>

    </Box>
  )
}

export default SignInArea