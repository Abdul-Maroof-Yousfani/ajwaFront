import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import Deliverys from '../../../components/Dashboard/Delivery/Delivery';
const Delivery = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
          <Deliverys />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default Delivery;
