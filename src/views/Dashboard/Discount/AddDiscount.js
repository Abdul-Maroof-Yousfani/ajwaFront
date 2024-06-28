import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import AddDiscountDashboard from '../../../components/Dashboard/Discount/AddDiscount';
const AddDsicount = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
          <AddDiscountDashboard />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default AddDsicount;
