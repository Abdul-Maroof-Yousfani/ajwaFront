import React from 'react';
import MainDashboard from '../../../components/DashNav/MainDashboard';
import { Stack } from '@chakra-ui/react';
import AddOffer from '../../../components/Dashboard/Offer/AddOffer.js';
import OfferDetail from '../../../components/Dashboard/Offer/OfferDetail.js';
import ProductDetail from '../../../components/Dashboard/Offer/ProductDetail.js';

const AddOffers = () => {
  return (
    <>
      <Stack >
        <MainDashboard>
          <AddOffer />
          {/* <ProductDetail /> */}
          {/* <OfferDetail /> */}
        </MainDashboard>
      </Stack>
    </>
  );
};

export default AddOffers;
