import React from 'react'
import MainDashboard from '../../../components/DashNav/MainDashboard'
import { Stack } from '@chakra-ui/react'
import Productlist from '../../../components/Dashboard/Product/Productlist'

export default function Product() {
  return (
    <Stack overflowY="hidden">
    <MainDashboard>
       <Productlist/>
    </MainDashboard>
  </Stack>
  )
}
