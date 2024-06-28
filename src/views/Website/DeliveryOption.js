import React, { useEffect } from 'react';
import Delivery from '../../components/Website/Delivery';
import MiniBanner from '../../components/Website/banner/MiniBanner';
import Header from '../../components/Website/Header';
import Footer from '../../components/Website/Footer';

export default function DeliveryOption() {

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
}, []);

  return (
    <>
      <Header />
      <MiniBanner title={'Delivery Options'} breadtitle={'Delivery Options'} />
      <Delivery />
      <Footer />
    </>
  );
}
