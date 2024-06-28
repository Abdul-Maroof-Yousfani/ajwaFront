import React, { useEffect } from 'react'
import Header from "../../components/Website/Header";
import Footer from "../../components/Website/Footer";
import MiniBanner from '../../components/Website/banner/MiniBanner';
import StoreLocation from '../../components/Website/storelocation';


export default function StoreFinder() {

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
}, []);

  return (
    <>
    <Header/>
    <MiniBanner title={'Store Finder'} breadtitle={'Store Finder'}/>
    <StoreLocation/>
    <Footer/>
    </>
  )
}
