import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllCompaniesAndCustomer } from '../../../service/AdminService'
import ClientsDetails from './ClientsDetails'

const CompaniesAndCustomer = () => {
    var companies=useSelector((state) => state.clients.companies)
    var customers=useSelector((state) => state.clients.customers)
    useEffect(() => {
        if(companies==0 && customers==0){
            const getCompaniesAndCustomer = async () => {
                await getAllCompaniesAndCustomer().then((arr) => {
                    companies=arr[0]
                    customers=arr[1]
                });
            }
            getCompaniesAndCustomer()
        }

    }, [])


    return (
        <Box>
            <Grid container sx={{ mt: 8 }} columnSpacing={{ xs: 4, sm: 5, md: 6 }}>
            {companies.map((c) => (
            <Grid key={c.id}>
              <ClientsDetails client={c} isComp={true}/>
            </Grid>
          ))}
            {customers.map((c) => (
            <Grid key={c.id}>
              <ClientsDetails client={c} isComp={false}/>
            </Grid>
          ))}
          </Grid>
        </Box>
    )
}

export default CompaniesAndCustomer