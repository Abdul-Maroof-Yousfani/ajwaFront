import React, { useEffect } from 'react'
import Header from '../../components/Website/Header'
import Footer from '../../components/Website/Footer'
import MiniBanner from '../../components/Website/banner/MiniBanner'
import About from '../../components/Website/about'
import Support from '../../components/Website/cta/Support'


export default function AboutUs() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
}, []);

  return (
    <>
     <Header/>
    <MiniBanner title={'About Us'} breadtitle={'About Us'}/>
    <About/>
    <Support/>
    <Footer/>
    </>
  )
}
