import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import Userlist from '../../../components/Dashboard/User/Userlist';
 

export default function Users() {
  return (
    <>
    <Stack overflowY="hidden">
        <MainDashboard>
           <Userlist/>
        </MainDashboard>
      </Stack>
    </>
  )
}
