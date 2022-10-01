import React from 'react'
import TopHeader from '../components/Common/Header/TopHeader'
import Header from '../components/Common/Header'
import FashionBanner from './Fashion/Banner'
import BannerBottom from './Fashion/BannerBottom'
import HotProduct from './Fashion/HotProduct/Index'

const Fashion = () => {
  return (
    <div>
        <TopHeader />
        <Header />
        <FashionBanner />
        <BannerBottom />
        <HotProduct />
    </div>
  )
}

export default Fashion