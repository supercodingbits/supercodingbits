import React from 'react'
import Footer from './HeaderandFooter/Footer'
import Header from './HeaderandFooter/Header'
import HomeSection from './HomePage/Banner/Banner'
import HomeAboutSection from './HomePage/HomeAboutSection/HomeAboutSection'
import HomeCodeList from './HomePage/HomeCodeList/HomeCodeList'

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <HomeAboutSection />
      <HomeCodeList />
      <Footer />
    </>
  )
}

export default HomePage