import React, { useEffect } from 'react';
import Header from '../../components/Website/Header';
import MiniBanner from '../../components/Website/banner/MiniBanner';
import Footer from '../../components/Website/Footer';
import SelectTopUp from '../../components/Website/topamount/SelectTopUp';

export default function TopAmount() {

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
      <SelectTopUp/>
      <Footer />
    </>
  )
}
