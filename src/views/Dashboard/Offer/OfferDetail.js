import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import OfferDetail from '../../../components/Dashboard/Offer/OfferDetail.js';
import ProductDetail from '../../../components/Dashboard/Offer/ProductDetail.js';

const OfferDetails = () => {
  return (
    <>
      <Stack >
        <MainDashboard>
          {/* <ProductDetail /> */}
          <OfferDetail />
        </MainDashboard>
      </Stack>
    </>
  );
};

export default OfferDetails;
