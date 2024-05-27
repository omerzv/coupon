
import { Box, Stack, Typography } from '@mui/material'

import React, { useState } from 'react'
import { couponAction } from '../../../utils/constans'
import AddCoupon from './AddCoupon'
import AllCoupons from './AllCoupons'


const CompanyProfile = ({ client }) => {

    const [selectedAction, setSelectedAction] = useState("All My Coupons");
   


    return (
        <Box >
            <Box paddingLeft={50}>
                <Typography fontFamily="cursive" variant="h4" color={"#ee6c4d"} >
                    Welcome Back, Choose Your Action
                </Typography>
                <Stack direction="row" sx={{ mt: 5 ,ml:10 }}>
                    {couponAction.map((action, index) => (
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
            <Box >
                
                {selectedAction === 'Add Coupon' ? <AddCoupon /> : null}
                {selectedAction === 'All My Coupons' ? <AllCoupons /> : null}
            </Box>
        </Box>
    )
}

export default CompanyProfile