import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompanyCoupons } from "../../../Redux/couponSlice";
import { store } from "../../../Redux/store";
import { getAllCoupon } from "../../../service/CompanyService";
import CompanyCouponDetails from "./CompanyCouponDetails";
import EditCoupon from "./EditCoupon";



const AllCoupons = () => {
  const [openWindow, setOpenWindow] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [coupon, setCoupon] = useState();
  const companyCoup = useSelector((state) => state.coupon.companyCoup)

  useEffect( () => {
    const getCoupon = async () => {
      if (companyCoup == 0) {
        await getAllCoupon().then((arr) => {
          setCoupons(arr);
        });
      } else{
        setCoupons(store.getState().coupon.companyCoup);
      }
      
    }
    getCoupon()

  }, [openWindow]);

  return (
    <Box sx={{ ml: 20, mr: 20 }}>

      {openWindow === true ? (
        <EditCoupon
          coupon={coupon}
          setOpenWindow={setOpenWindow}
        />
      ) : (
        <Grid container sx={{ mt: 8 }} columnSpacing={{ xs: 4, sm: 5, md: 6 }}>
          {coupons.map((c) => (
            <Grid key={c.id}>
              <CompanyCouponDetails
                key={c.id}
                coupon={c}
                setCoupon={setCoupon}
                setOpenWindow={setOpenWindow}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AllCoupons;
