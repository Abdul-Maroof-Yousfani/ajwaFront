import React from 'react';
import LoginFrom from '../../components/Website/Auth/LoginFrom';
import Header from '../../components/Website/Header';
import MiniBanner from '../../components/Website/banner/MiniBanner';
import Footer from '../../components/Website/Footer';

export default function Login() {
  return (
    <>
      <Header />
      <MiniBanner title={'Login'} breadtitle={'Login'} />
      <LoginFrom />
      <Footer />
    </>
  );
}
