import React from 'react'
import Header from '../../components/Common/Header'
import Banner from '../../components/Common/Banner'
import Layout from '../../components/MyAccountDashboard/Layout'
import Address from '../../components/MyAccountDashboard/Address'
import Footer from '../../components/Common/Footer'
import TopHeader from '../../components/Common/Header/TopHeader'
const CustomerAddress = () => {
    return (
        <>
        <TopHeader />
             <Header />
            <Banner title="Müşteri Paneli" />
            <Layout>
                <Address />
            </Layout>
            <Footer />
        </>
    )
}

export default CustomerAddress
