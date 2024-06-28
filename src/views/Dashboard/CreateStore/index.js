import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import CreateBranch from '../../../components/Dashboard/Stores/CreateBranch';

const CreateStore = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
          <CreateBranch />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default CreateStore;
