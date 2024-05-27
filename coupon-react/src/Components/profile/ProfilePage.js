import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import AdminProfile from './Admin/AdminProfile';
import CompanyProfile from './Company/CompanyProfile';

import CustomerProfile from './Customer/CustomerProfile';

const ProfilePage = () => {
  const client = useSelector((state) => state.auth.client)
  

  return (
    <Box>
      {client.clientType === 'Customer' ? <CustomerProfile client={client} /> : <div></div>}
      {client.clientType === 'Company' ? <CompanyProfile client={client} /> : <div></div>}
      {client.clientType === 'Administrator' ? <AdminProfile client={client} /> : <div></div>}

    </Box>)
    
}

export default ProfilePage