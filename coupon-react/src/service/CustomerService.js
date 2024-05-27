import axios from "axios";
import { addCustomerCoupon } from "../Redux/couponSlice";
import { store } from "../Redux/store"


export const getAllCustomerCoupons = async () => {
    var res = [];
    
    const response = await axios.get("http://localhost:8080/customer/coupons")
        .then(function (response) {
           
            res = response.data
        }).catch(function (error) { console.log(error) });

    return res
}

export const purchaseCoupon= async (coupon) => {
    await axios.put("http://localhost:8080/customer/purchase",coupon)
        .then(function (response) {
            console.log("sec");
            store.dispatch(addCustomerCoupon(coupon))
        }).catch(function (error) { console.log(error) });

}