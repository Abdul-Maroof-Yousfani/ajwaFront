import React, { useEffect } from 'react';
import Paymentdetails from '../../components/Website/topamount/Paymentdetails';
import Header from '../../components/Website/Header';
import MiniBanner from '../../components/Website/banner/MiniBanner';
import Footer from '../../components/Website/Footer';

export default function Paymentdetail() {

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
}, []);

  return (
    <>
      <Header />
      <MiniBanner title={'Top up Amount'} breadtitle={'Top up Amount'} />
      <Paymentdetails />
      <Footer />
    </>
  );
}
