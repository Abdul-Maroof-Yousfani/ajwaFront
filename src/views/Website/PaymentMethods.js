import React, { useEffect } from 'react';
import Header from '../../components/Website/Header';
import MiniBanner from '../../components/Website/banner/MiniBanner';
import Footer from '../../components/Website/Footer';
import PaymentSelect from '../../components/Website/topamount/PaymentSelect';

export default function PaymentMethods() {

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
      <PaymentSelect />
      <Footer />
    </>
  );
}
