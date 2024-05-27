import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    coupons: [],
    customerCoup: [],
    companyCoup: []

}

export const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {
        addCoupons: (state, action) => {
            state.coupons = action.payload
        },
        addCustomerCoupons: (state, action) => {
            state.customerCoup = action.payload
        },
        addCustomerCoupon: (state, action) => {

            state.customerCoup.push(action.payload)
        },
        addCompanyCoupons: (state, action) => {
            state.companyCoup = action.payload
        },
        addCompanyCoupon: (state, action) => {
            action.payload.company = state.companyCoup[0].company
            state.companyCoup.push(action.payload)
            state.coupons.push(action.payload)
        },
        updateCoupon: (state, action) => {
            var indexToUpdate = state.coupons.findIndex(p => p.id === action.payload.id)
            if (indexToUpdate >= 0) state.coupons[indexToUpdate]= action.payload;
           
            indexToUpdate = state.companyCoup.findIndex(p => p.id === action.payload.id)
            if (indexToUpdate >= 0) state.companyCoup[indexToUpdate] = action.payload;

        },

        
        deleteCoupon: (state, action) => {
            var indexToDelete = state.coupons.findIndex(p => p.id === action.payload.id)
            state.coupons.splice(indexToDelete, 1)
            
            indexToDelete = state.companyCoup.findIndex(p => p.id === action.payload.id)
            state.companyCoup.splice(indexToDelete, 1)

        },
        clearState: (state) => {
            state.companyCoup=[]
            state.customerCoup = []
        }

    }
})


// Action creators are generated for each case reducer function
export const { addCoupons, addCustomerCoupons, addCustomerCoupon, addCompanyCoupons, clearState, deleteCoupon, updateCoupon, addCompanyCoupon } = couponSlice.actions

export default couponSlice.reducer