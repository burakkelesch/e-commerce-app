import React from 'react'
import Header from '../../components/Common/Header'
import Banner from '../../components/Common/Banner'
import RegisterArea from '../../components/Register'
import Footer from '../../components/Common/Footer'
const Register = () => {
    return (
        <>
            <Header />
            <Banner title="Kayıt Ol" />
            <RegisterArea />
            <Footer />
        </>
    )
}



export default Register