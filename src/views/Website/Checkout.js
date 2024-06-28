import React, { useEffect } from 'react'
import Header from '../../components/Website/Header'
import CheckOutfrom from '../../components/Checkout/CheckOutfrom'
import Footer from '../../components/Website/Footer'
import MiniBanner from '../../components/Website/banner/MiniBanner'

export default function Checkout() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
}, []);

  return (
    <>
    <Header/>
      <MiniBanner title={'Checkout'} breadtitle={'Checkout'} />
     <CheckOutfrom/>
      <Footer/>
    </>
  )
}
