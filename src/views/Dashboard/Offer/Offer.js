import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import Offer from "../../../components/Dashboard/Offer/Offer.js"
const Offers = () => {
  return (
    <>
      <Stack overflowY="hidden">
        <MainDashboard>
          <Offer />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default Offers;
