import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import ProfileDashboard from '../../../components/Dashboard/Profile/Profile';
const Profile = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
            <ProfileDashboard />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default Profile;
