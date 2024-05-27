import axios from "axios";
import { addCompanyCoupon, addCompanyCoupons, deleteCoupon, updateCoupon } from "../Redux/couponSlice";
import { store } from "../Redux/store"


export const addCoupon = async (coupon, setMessage,img) => {
   
    const response = await axios.post("http://localhost:8080/company/coupon", coupon)
        .then(async function (response) {
            if (coupon.image != null) {
                let formData = new FormData();
                formData.append("file", img)
                const resp = await axios.post("http://localhost:8080/files/uploadFile", formData)
                    .then(function (response) { console.log(response) })
                    .catch(function (error) { console.log(error) })
            }
            console.log(response)
            setMessage("sec")
            coupon.id=response.data.id
            store.dispatch(addCompanyCoupon(coupon))
        }).catch(function (error) {
            console.log(error.response.data.message)
            setMessage(error.response.data.message)
        });

}

export const getAllCoupon = async () => {
    var res = [];
    
    const response = await axios.get("http://localhost:8080/company/coupon")
        .then(function (response) {
            console.log(response.data)
            res = response.data
            store.dispatch(addCompanyCoupons(res))
        })
        .catch(function (error) { console.log(error) });
    return res

}


export const UpdateCoupon = async (coupon, setMessage,setOpenWindow,img) => {
   
    const response = await axios.put("http://localhost:8080/company/coupon",
        coupon)
        .then(async function (response) {
            console.log(response.data)
            if (coupon.image != null) {
                let formData = new FormData();
                formData.append("file", img)
                const resp = await axios.post("http://localhost:8080/files/uploadFile", formData)
                    .then(function (response) { console.log(response) })
                    .catch(function (error) { console.log(error) })
            }
           
            store.dispatch(updateCoupon(coupon))
            setOpenWindow(false)
        })
        .catch(function (error) {
            console.log(error)
            setMessage(error.response.data.message)
        });


}


export const RemoveCoupon = async (coupon) => {
    console.log(coupon)
    await axios.delete("http://localhost:8080/company/coupon", {params: {
        couponid: coupon.id
      }})
    .then(function (response) {
        console.log(response.data);
        store.dispatch(deleteCoupon(coupon))
        
    }).catch(function (error) { console.log(error) });

}