import { Box, Grid, MenuItem, Select, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerCoupons } from '../../../Redux/couponSlice';
import { getAllCustomerCoupons } from '../../../service/CustomerService';
import CustomerCouponDetails from './CustomerCouponDetails';

const CustomerProfile = ({ client }) => {
    const [coupons, setCoupons] = useState([])
    const [category, setCategory] = useState("All")
    const dispatch = useDispatch();
    const customerCoup = useSelector((state) => state.coupon.customerCoup)

    useEffect(() => {
        if (customerCoup == 0) {
            (async () => {
                getAllCustomerCoupons().then(arr => {
                    setCoupons(arr)
                    dispatch(addCustomerCoupons(arr))
                }, err => console.log(err))
            })();
        }
        setCoupons(customerCoup)
    }, [])

    const onChangeCategory = (selectedCategory) => {
        setCategory(selectedCategory)
        setCoupons(customerCoup)
        if (selectedCategory != "All") {
            setCoupons(customerCoup.filter(c => c.category === selectedCategory))
        }
    }
    const onChangePrice = (selectedPrice) => {
        console.log("dd");
        setCoupons(customerCoup)
        if (selectedPrice >0) {
            setCoupons(customerCoup.filter(c => c.price <= selectedPrice))
        }
    }

    return (

        <Box>
            <Typography fontFamily="cursive" variant="h4" color={"whitesmoke"} sx={{ pl: 50, pt: 5 }}>
                hello {client.name}, choose the wanted category to filter
            </Typography>
            <Box sx={{ ml: 20, mr: 20, mt: 10 }}>

                
                <select onChange={(event) => { onChangeCategory(event.target.value) }}  value={category}
                 className='tx-main' style={{ height:"55px", marginBottom: "15px" }}>
                    <option value="Food">Food</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Vaction">Vaction</option>
                </select>
                <input type='number' onChange={(event) => { onChangePrice(event.target.value) }} 
                 className='tx-main' style={{marginLeft:"40%"}} ></input>

                <Grid container sx={{ mt: 8 }} columnSpacing={{ xs: 4, sm: 5, md: 6 }}>
                    {coupons.map(c => (
                        <Grid key={c.id} sx={{ mt: 2 }}>
                            <CustomerCouponDetails key={c.id} coupon={c} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>

    )
}

export default CustomerProfile





