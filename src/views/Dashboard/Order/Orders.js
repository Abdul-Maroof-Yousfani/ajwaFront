import React from 'react'
import MainDashboard from '../../../components/DashNav/MainDashboard'
import { Stack } from '@chakra-ui/react'
import OrderList from '../../../components/Dashboard/Orders/OrderList'

export default function Orders() {
  return (
    <Stack overflowY="hidden">
    <MainDashboard>
       <OrderList/>
    </MainDashboard>
  </Stack>
  )
}
