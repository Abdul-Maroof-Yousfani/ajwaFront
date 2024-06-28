import React from 'react'
import UserDetail from '../../../components/Dashboard/User/UserDetail'
import { Stack } from '@chakra-ui/react'
import MainDashboard from '../../../components/DashNav/MainDashboard'

export default function UserDetails() {
  return (
    <Stack overflowY="hidden">
    <MainDashboard>
       <UserDetail/>
    </MainDashboard>
  </Stack>
  )
}
