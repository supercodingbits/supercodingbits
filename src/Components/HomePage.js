import React from 'react'
import Footer from './HeaderandFooter/Footer'
import Header from './HeaderandFooter/Header'
import HomeSection from './HomePage/Banner/Banner'
import Cheatsheets from './HomePage/Cheatsheets/Cheatsheets'
import HomeAboutSection from './HomePage/HomeAboutSection/HomeAboutSection'
import HomeCodeList from './HomePage/HomeCodeList/HomeCodeList'

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <HomeAboutSection />
      <HomeCodeList />
      <Cheatsheets />
      <Footer />
    </>
  )
}

export default HomePage