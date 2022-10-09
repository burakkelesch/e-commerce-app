import React from 'react'
import Header from '../../components/Common/Header'
import Banner from '../../components/Common/Banner'
import AboutComponent from '../../components/About'
import Footer from '../../components/Common/Footer'
const About = () => {
    return (
        <>
            <Header />
            <Banner title="Hakkımızda" />
            <AboutComponent />
            <Footer />
        </>
    )
}



export default About