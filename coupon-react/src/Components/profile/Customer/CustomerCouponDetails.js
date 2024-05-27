

import { Card, CardContent, Typography, CardMedia } from "@mui/material";




const CustomerCouponDetails = ({ coupon ,setOpenWindow}) => {
    const URL = "http://localhost:8080/files/dowloadFile/" + coupon.image
   

    return (
        <Card className="card" variant="outlined" sx={{ borderRadius: '20px', background: '#98c1d9' ,m:'20px'}}>
            <CardContent  >


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
                    image={URL}
                    alt="Paella dish"
                    sx={{ display: 'flex', justifyContent: 'center' }}
                />
            </CardContent>

            <Typography sx={{ m: 3, display: 'flex', justifyContent: 'center' }} color="text.secondary">
                {coupon.price}$
            </Typography>
            <Typography sx={{ m: 3, display: 'flex', justifyContent: 'center' }} color="text.secondary">
                added by {coupon.company.name}
            </Typography>
        </Card>
    )
}

export default CustomerCouponDetails