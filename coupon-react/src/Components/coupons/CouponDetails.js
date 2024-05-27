

import { Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { purchaseCoupon } from "../../service/CustomerService";



const CouponDetails = ({ coupon }) => {
  
  const client = useSelector((state) => state.auth.client)
  const URL=()=>{
    if (coupon.image != null) {
       return  "http://localhost:8080/files/dowloadFile/" + coupon.image
    }

  }
  const onBuy = () => {
    purchaseCoupon(coupon)
  }


  return (
    <Card className="card" variant="outlined" sx={{ borderRadius: '20px', background: '#98c1d9', m: '20px' }}
    >
      <CardContent  >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{ display: 'flex', justifyContent: 'center' }}>
          from {coupon.startDate} until {coupon.endDate}
        </Typography>
        <Typography variant="h5" component="div" style={{ display: 'flex', justifyContent: 'center' }}>
          {coupon.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ display: 'flex', justifyContent: 'center' }}>

          {coupon.category}

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ display: 'flex', justifyContent: 'center' }}>
          {coupon.price}$ ({coupon.amount} left)
        </Typography>
        <CardMedia
          className="cardMedia"
          component="img"
          height="20"
          image={URL()}
          alt="Paella dish"
        />
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button disabled={client.clientType == 'Customer' ? false : true} size="small" onClick={() => { onBuy() }} >Buy</Button>
      </CardActions >
      <Typography style={{ display: 'flex', justifyContent: 'center' }} color="text.secondary">
        added by {coupon.company.name}
      </Typography>
    </Card>
  )
}

export default CouponDetails