import React from 'react'
import Header from '../../components/Website/Header'
import MiniBanner from '../../components/Website/banner/MiniBanner'
import Footer from '../../components/Website/Footer'
import Signupfrom from '../../components/Website/Auth/Signupfrom'

export default function Register() {
  return (
    <>
      <Header/>
      <MiniBanner title={'sign up'} breadtitle={'sign up'} />
     <Signupfrom/>
      <Footer/>
    </>
  )
}
