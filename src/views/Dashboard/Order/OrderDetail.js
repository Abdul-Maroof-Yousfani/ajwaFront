import { Stack } from '@chakra-ui/react'
import React from 'react'
import OrderDetails from '../../../components/Dashboard/Orders/OrderDetails'
import MainDashboard from '../../../components/DashNav/MainDashboard'


export default function OrderDetail() {
  return (
    <Stack overflowY="hidden">
    <MainDashboard>
       <OrderDetails/>
    </MainDashboard>
  </Stack>
  )
}
