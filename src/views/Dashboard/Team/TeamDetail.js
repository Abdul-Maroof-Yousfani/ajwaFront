import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import MemberDetail from "../../../components/Dashboard/Team/MemberDetail.js";
const TeamDetail = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
            <MemberDetail />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default TeamDetail;
