import React from 'react'
import MainDashboard from '../../../components/DashNav/MainDashboard'
import { Stack } from '@chakra-ui/react'
import Report from '../../../components/Dashboard/Report/Report'

export default function ReportAnalytics() {
  return (
    <Stack overflowY="hidden">
    <MainDashboard>
       <Report/>
    </MainDashboard>
  </Stack>
  )
}
