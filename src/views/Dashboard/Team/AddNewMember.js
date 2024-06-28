import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import AddNewMember from "../../../components/Dashboard/Team/AddNewMember.js";
const AddNewTeamMember = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
        <AddNewMember />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default AddNewTeamMember;
