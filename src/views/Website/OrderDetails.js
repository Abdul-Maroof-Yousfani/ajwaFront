import React from 'react';
import Header from '../../components/Website/Header';
import MiniBanner from '../../components/Website/banner/MiniBanner';
import Footer from '../../components/Website/Footer';
import SingleOrder from '../../components/Website/Myacount/SingleOrder';

export default function OrderDetails() {
  return (
    <>
      <Header />
      <MiniBanner title={'Order Details'} breadtitle={'Order Details'} />
      <SingleOrder/>
      <Footer />
    </>
  );
}
