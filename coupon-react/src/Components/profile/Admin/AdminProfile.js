import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CompaniesAndCustomer from './CompaniesAndCustomer'
import { adminAction } from '../../../utils/constans'
import AddCllient from './AddClient'
const AdminProfile = () => {
    const [selectedAction, setSelectedAction] = useState("All Clients");

    return (
        <Box >
            <Box paddingLeft={30}>
                <Typography fontFamily="cursive" variant="h4" color={"#ee6c4d"} paddingLeft={30}>
                    Welcome Back Admin
                </Typography>

                <Stack direction="row" sx={{ mt: 5, ml: 10 }}>
                    {adminAction.map((action, index) => (
                        <button
                            key={index}
                            className='prime-btn'
                            style={{
                                marginLeft: 8,
                                marginRight: 8,

                                borderColor: action.name === selectedAction ? "#ee6c4d" : "#3d5a80",
                                background: action.name === selectedAction && "#e0fbfc",
                            }}
                            onClick={() => { setSelectedAction(action.name) }}>
                            <span style={{ color: action.name === selectedAction ? "#ee6c4d" : "#3d5a80", marginRight: "15px" }}>
                                {action.icon}
                            </span>
                            <span style={{ opacity: action.name === selectedAction ? "1" : "0.7" }}>
                                {action.name}
                            </span>
                        </button>
                    ))}
                </Stack>
            </Box>
            <Box margin={10} paddingLeft={20} >
                {selectedAction === 'Add Client' ? <AddCllient/> : null}
                {selectedAction === 'All Clients' ? <CompaniesAndCustomer /> : null}
            </Box>
        </Box>
    )
}

export default AdminProfile