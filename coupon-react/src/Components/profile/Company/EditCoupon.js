import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { addCoupon, UpdateCoupon } from '../../../service/CompanyService';

const EditCoupon = ({ coupon, setOpenWindow }) => {
    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState("");
    const send = async (data) => {
        let img = null;
        if (data.image[0] != null) {
            img = data.image[0].name;
        }
        coupon = {
            id: coupon.id,
            title: data.title,
            startDate: data.startDate,
            endDate: data.endDate,
            price: data.price,
            amount: data.amount,
            category: data.category,
            image: img,
            company: coupon.company
        }
        await UpdateCoupon(coupon, setMessage,setOpenWindow,data.image[0])
    }

    
    return (
        <Box style={{ display: "flex", justifyContent: "center" }} margin={10} marginLeft={30} sx={{ boxShadow: '0 0 20px #8ecae6 ', maxWidth: "500px", borderRadius: '20px' }} >
            <form onSubmit={handleSubmit(send)}  >
                <label className='lbl-message' >{message}</label>
                <br></br>
                <label >Title</label>
                <input className='tx-main' defaultValue={coupon.title}{...register("title")}></input>
                <br></br>
                <label>Price</label>
                <input className='tx-main' style={{ width: "125px" }} type={'number'} defaultValue={coupon.price} {...register("price")}></input>
                <label>Amount</label>
                <input className='tx-main' style={{ width: "125px" }} type={'number'} defaultValue={coupon.amount} {...register("amount")}></input>
                <br></br>
                <label>Start Date</label>
                <input className='tx-main' type="date" defaultValue={coupon.startDate} {...register("startDate")} ></input>
                <br></br>
                <label>End Date</label>
                <input className='tx-main' type={'date'} defaultValue={coupon.endDate} {...register("endDate")}></input>
                <br></br>
                <label>Select Category</label>
                <select className='tx-main' defaultValue={coupon.category} style={{ width: "260px", marginBottom: "15px" }}  {...register("category")}>
                    <option value="Food">Food</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Vaction">Vaction</option>
                </select>
                <br></br>
                <label className='file-label'>
                    Upload
                    <input className='file-main' type={'file'} {...register("image")} ></input >
                </label>
                <br></br>
                <input className='sec-btn' type={'submit'} style={{ marginTop: "15px" }} onClick={handleSubmit}></input>
            </form>

        </Box>
    )
}

export default EditCoupon