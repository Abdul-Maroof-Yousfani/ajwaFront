import React from 'react'
import InquiriesUserDetails from '../../../components/Dashboard/Contact/InquiriesUserDetails'
import MainDashboard from '../../../components/DashNav/MainDashboard'
import { Stack } from '@chakra-ui/react'

export default function InquiriesDetails() {
  return (
    <Stack overflowY="hidden">
    <MainDashboard>
      <InquiriesUserDetails/>
    </MainDashboard>
  </Stack>
  )
}
