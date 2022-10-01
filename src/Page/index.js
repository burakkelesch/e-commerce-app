import React from 'react'
import TopHeader from '../components/Common/Header/TopHeader'
import Header from '../components/Common/Header'
import FashionBanner from './Fashion/Banner'
import BannerBottom from './Fashion/BannerBottom'

const Fashion = () => {
  return (
    <div>
        <TopHeader />
        <Header />
        <FashionBanner />
        <BannerBottom />
    </div>
  )
}

export default Fashion