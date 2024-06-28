import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import Team from "../../../components/Dashboard/Team/Team.js";
import MemberDetail from "../../../components/Dashboard/Team/MemberDetail.js";
const Offers = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
            <Team />
            {/* <MemberDetail /> */}
        </MainDashboard>
      </Stack>
    </>
  );
};

export default Offers;
