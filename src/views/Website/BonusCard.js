import React, { useEffect } from 'react'
import Header from '../../components/Website/Header'
import MiniBanner from '../../components/Website/banner/MiniBanner'
import Footer from '../../components/Website/Footer'
import BonusTopUp from '../../components/Website/topamount/BonusTopUp'

export default function BonusCard() {

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
     <BonusTopUp/>
      <Footer />
  </>
  )
}
