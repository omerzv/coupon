import { createSlice } from '@reduxjs/toolkit'




const initialState = {
    customers: [],
    companies: []
}


export const clientSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        addCustomers: (state, action) => {
            state.customers = action.payload
        },
        addCompanies: (state, action) => {
            state.companies = action.payload
        },
        addCustomer: (state, action) => {
            state.customers.push(action.payload)
        },
        addCompany: (state, action) => {
            state.companies.push(action.payload)
        },
        deleteCustomer: (state, action) => {
            var indexToDelete = state.customers.findIndex(p => p.id === action.payload)
            state.customers.splice(indexToDelete, 1)

        },
        deleteCompany: (state, action) => {
            var indexToDelete = state.companies.findIndex(p => p.id === action.payload)
            state.companies.splice(indexToDelete, 1)

        },
        updateCustomers: (state, action) => {
            var indexToUpdate = state.customers.findIndex(p => p.id === action.payload.id)
            if (indexToUpdate >= 0) state.customers[indexToUpdate] = action.payload;
        },
        updateCompanies: (state, action) => {
            var indexToUpdate = state.companies.findIndex(p => p.id === action.payload.id)
            if (indexToUpdate >= 0) state.companies[indexToUpdate] = action.payload;
        }

    }
})


export const { deleteCompany,deleteCustomer,addCustomers,addCustomer, addCompanies,addCompany, updateCustomers, updateCompanies } = clientSlice.actions

export default clientSlice.reducer