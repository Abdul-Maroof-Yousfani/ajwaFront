import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import DiscountsDashboard from '../../../components/Dashboard/Discount/Discounts';
const Discounts = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
          <DiscountsDashboard />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default Discounts;
