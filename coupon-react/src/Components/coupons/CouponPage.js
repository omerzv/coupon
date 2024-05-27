
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoupon } from "../../service/CouponService";
import CouponDetails from "./CouponDetails";
import { addCoupons } from "../../Redux/couponSlice";


const CouponPage = () => {
  const [coupons, setCoupons] = useState([])
  const dispatch = useDispatch();
  const store = useSelector((state) => state.coupon.coupons)
  useEffect(() => {
    if (store == 0) {
      (async () => {
        console.log(store)
        getAllCoupon().then(arr => {
          setCoupons(arr)
          dispatch(addCoupons(arr))
        }, err => console.log(err))
      })();
    }
    setCoupons(store)
  }, [])

  return (
    <Box  sx={{ml:20,mr:20}}>
      <Typography fontFamily="cursive" variant="h4" color={"whitesmoke"} sx={{ pl: 50, pt: 5 }}>
        here you can buy coupons
      </Typography>
      <Grid container sx={{ mt: 8 }} columnSpacing={{ xs: 4, sm: 5, md: 6 }}>
        {coupons.map(c => (
          <Grid key={c.id}>
            <CouponDetails key={c.id} coupon={c} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CouponPage