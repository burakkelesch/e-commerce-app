import React from 'react'
import TopHeader from '../components/Common/Header/TopHeader'
import Header from '../components/Common/Header'
import FashionBanner from './Fashion/Banner'
import BannerBottom from './Fashion/BannerBottom'
import HotProduct from './Fashion/HotProduct/Index'
import Footer from '../components/Common/Footer'

const Fashion = () => {
  return (
    <div>
        <TopHeader />
        <Header />
        <FashionBanner />
        <BannerBottom />
        <HotProduct />
        <Footer />
    </div>
  )
}

export default Fashion