import React, { useEffect } from 'react'
import Header from '../../components/Website/Header'
import MiniBanner from '../../components/Website/banner/MiniBanner'
import AddCart from '../../components/Website/cart'
import Footer from '../../components/Website/Footer'

export default function Cart() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
}, []);

  return (
    <>
    <Header/>
      <MiniBanner title={'Cart'} breadtitle={'Cart'} />
      <AddCart/>
      <Footer />
    </>
  )
}
