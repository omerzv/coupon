import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';
import { removeCompany, removeCustomer, updateCompany, updateCustomer } from '../../../service/AdminService';

const ClientsDetails = ({ client, isComp }) => {
    const [isHover, setIsHover] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState(client.email)
    const ClickUpdateCompany = async () => {
        var updateClient = {
            id: client.id,
            name: client.name,
            email: email,
        }
        if (name != '') {
            updateClient.name = name
        }
        console.log(updateClient);
        await updateCompany(updateClient)

    }
    const ClickUpdateCustomer = async () => {
        var updateClient = {
            id: client.id,
            firstName: client.firstName,
            lastName: client.lastName,
            email: email,
        }
        if (name != '') {
            const arr = name.split(' ')
            updateClient.lastName = arr.pop()
            updateClient.firstName = arr.join(" ")
        }
        console.log(updateClient);
        await updateCustomer(updateClient)

    }

    return (
        <Card onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} className="card" variant="outlined" sx={{ borderRadius: '20px', background: '#98c1d9', m: '20px' }}>
            <CardContent  >

                <Box sx={{ display: 'flex', justifyContent: 'center', m: '20px' }}>
                    <input className='tx-admin' type={'text'}
                        defaultValue={isComp == true ? client.name : client.firstName + " " + client.lastName}
                        onChange={(e) => { setName(e.target.value) }}></input>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', m: '20px' }}>
                    <input className='tx-admin' type={'email'}
                        defaultValue={client.email}
                        onChange={(e) => { setEmail(e.target.value) }}></input>
                </Box>

                {isHover === true ?
                    <Box >
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="bt-edit" onClick={async () => {
                            {
                                isComp == true ?
                                    await ClickUpdateCompany()
                                    :
                                    await ClickUpdateCustomer()
                            }
                        }}><EditIcon /></button>
                        <button className="bt-edit" onClick={async () => {
                            {
                                isComp == true ?
                                    await removeCompany(client.id)
                                    :
                                    await removeCustomer(client.id)
                            }
                        }}><RemoveIcon /></button>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', m: '10px' }}>
                            {isComp == true ? <Typography>Company</Typography> : <Typography>Customer</Typography>}
                        </Box>
                    </Box> : null}

            </CardContent>
        </Card >
    )
}

export default ClientsDetails