import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import SellingItems from '../../../components/Dashboard/SellingItem/SellingItems';
const MostSellingItem = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
          <SellingItems />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default MostSellingItem;
