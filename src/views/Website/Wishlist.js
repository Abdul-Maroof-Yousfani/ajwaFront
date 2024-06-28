import React, { useEffect } from 'react'
import Wishlistitems from '../../components/Website/wishlist'
import MiniBanner from '../../components/Website/banner/MiniBanner'
import Header from '../../components/Website/Header'
import Footer from '../../components/Website/Footer'

export default function Wishlist() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
}, []);
  return (
    <>
    <Header/>
      <MiniBanner title={'Wishlist'} breadtitle={'Wishlist'} />
      <Wishlistitems/>
      <Footer />
   
    </>
  )
}
