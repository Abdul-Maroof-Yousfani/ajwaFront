import React from 'react'
import AddNewProduct from '../../../components/Dashboard/Product/AddNewProduct'
import MainDashboard from '../../../components/DashNav/MainDashboard'
import { Stack } from '@chakra-ui/react'

export default function AddProducts() {
  return (
    <Stack overflowY="hidden">
    <MainDashboard>
       <AddNewProduct/>
    </MainDashboard>
  </Stack>
  )
}
