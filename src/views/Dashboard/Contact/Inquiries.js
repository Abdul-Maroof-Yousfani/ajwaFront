import React from 'react'
import MainDashboard from '../../../components/DashNav/MainDashboard'
import { Stack } from '@chakra-ui/react'
import InquiriesList from '../../../components/Dashboard/Contact/InquiriesList'

export default function Inquiries() {
  return (
    <Stack overflowY="hidden">
    <MainDashboard>
       <InquiriesList/>
    </MainDashboard>
  </Stack>
  )
}
