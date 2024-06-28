import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import StoreSetting from '../../../components/Dashboard/Stores/StoreSetting';
const StoreSettings = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
          <StoreSetting />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default StoreSettings;
