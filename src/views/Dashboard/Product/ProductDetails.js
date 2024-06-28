import React from 'react'
import SingleProductDetails from '../../../components/Dashboard/Product/SingleProductDetails'
import { Stack } from '@chakra-ui/react'
import MainDashboard from '../../../components/DashNav/MainDashboard'


export default function ProductDetails() {
  return (
    <Stack overflowY="hidden">
    <MainDashboard>
      <SingleProductDetails/>
     
    </MainDashboard>
  </Stack>
  )
}
