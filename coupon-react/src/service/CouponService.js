
import axios from "axios";



export const getAllCoupon = async () => {

    var res = [];
    const response = await axios.get("http://localhost:8080/coupons")
        .then(function (response) {
            console.log(response.data)
            res = response.data
        })
        .catch(function (error) { console.log(error) });
    return res

}




