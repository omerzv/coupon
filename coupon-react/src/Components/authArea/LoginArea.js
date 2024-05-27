import React, { useState } from 'react'
import authService from "../../service/AuthService"
import { Select, MenuItem, FormControl, InputLabel, Box, TextField, Typography, Button, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginArea = () => {
    const [clientType, setClientType] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const send = async () => {
        var token = await authService.login(email, password, clientType)
        console.log(token)
        if(token!=""){
            dispatch(login(token))
            navigate("../")
        }
    }

    return (
        <Box>

            <Stack
                direction="column"
                spacing={2}
                alignItems="baseline"
                sx={{ mr: 1, mt: 15 }}>
                <Typography color="#fff7f0" fontFamily="cursive" variant="h5" marginBottom={5} >
                    Login to your account
                </Typography>
                <TextField
                    required
                    label="email"
                    color="primary"
                    type="email"
                    style={{ width: "380px" }}
                    sx={{ background: "white" }}
                    onChange={(event) => { setEmail(event.target.value) }}
                />
                <TextField
                    size=''
                    required
                    style={{ width: "380px" }}
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    color="primary"
                    sx={{ background: "white" }}
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                />
                <FormControl color="primary" fullWidth sx={{ minWidth: 120, maxWidth: 200, background: "white" }}>
                    <InputLabel>Client Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={clientType}
                        label="Age"
                        onChange={(event) => { setClientType(event.target.value) }}>
                        <MenuItem value="Administrator">Administrator</MenuItem>
                        <MenuItem value="Customer">Customer</MenuItem>
                        <MenuItem value="Company">Company</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="outlined"
                    color="primary"
                    sx={{ background: "white" }}
                    onClick={send}>
                    Login
                </Button>
            </Stack>
        </Box>
    )
}

export default LoginArea