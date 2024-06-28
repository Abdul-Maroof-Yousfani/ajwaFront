import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import Store from '../../../components/Dashboard/Stores/index.js';

const DashStore = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
          <Store />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default DashStore;
