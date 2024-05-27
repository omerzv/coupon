

import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';


import { useNavigate } from "react-router-dom";
import { RemoveCoupon } from "../../../service/CompanyService";



const CompanyCouponDetails = ({ coupon, setOpenWindow, setCoupon }) => {
   
    const URL = () => {
        if (coupon.image != null) {
            const image = "http://localhost:8080/files/dowloadFile/" + coupon.image
            return image
        }

    }

    const RemoveCouponClicked = async () => {
        await RemoveCoupon(coupon)
    }
    return (
        <Card className="card" variant="outlined" sx={{ borderRadius: '20px', background: '#98c1d9', m: '20px' }}>
            <CardContent  >

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                    <button className="bt-edit" onClick={() => {
                        setOpenWindow(true)
                        setCoupon(coupon)
                    }}><EditIcon /></button>
                    <button className="bt-edit" onClick={RemoveCouponClicked}><RemoveIcon /></button>
                </Box>

                <Typography sx={{ fontSize: 14, display: 'flex', justifyContent: 'center' }} color="text.secondary" >
                    from {coupon.startDate} until {coupon.endDate}
                </Typography>
                <Typography variant="h5" component="div" style={{ display: 'flex', justifyContent: 'center' }}>
                    {coupon.title}
                </Typography>
                <Typography sx={{ mb: 1.5, display: 'flex', justifyContent: 'center' }} color="text.secondary">

                    {coupon.category}

                </Typography>

                <CardMedia
                    className="cardMedia"
                    component="img"
                    height="20"
                    image={URL()}
                    alt="Paella dish"
                    sx={{ display: 'flex', justifyContent: 'center' }}
                />
            </CardContent>

            <Typography sx={{ m: 3, display: 'flex', justifyContent: 'center' }} color="text.secondary">
                added by {coupon.company.name}
            </Typography>
        </Card>
    )
}

export default CompanyCouponDetails