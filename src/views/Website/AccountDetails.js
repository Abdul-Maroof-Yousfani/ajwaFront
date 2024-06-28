import React from 'react';
import MiniBanner from '../../components/Website/banner/MiniBanner';
import Footer from '../../components/Website/Footer';
import UserAcountDetails from '../../components/Website/Myacount/UserAcountDetails';
import Header from '../../components/Website/Header';

export default function AccountDetails() {
  return (
    <>
      <Header/>
      <MiniBanner title={'My Acount'} breadtitle={'My Acount'} />
      <UserAcountDetails/>
      <Footer />
    </>
  );
}
