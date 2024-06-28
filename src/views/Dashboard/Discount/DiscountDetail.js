import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import DiscountDetail from '../../../components/Dashboard/Discount/DiscountDetail';
const DiscountDetails = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
          <DiscountDetail />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default DiscountDetails;
