import React from 'react';
import Header from '../../components/Common/Header';
import Banner from '../../components/Common/Banner';
import Footer from '../../components/Common/Footer';
import CartArea from '../../components/Cart';
import TotalCart from '../../components/Cart/TotalCart';

const Cart = () => {
  return (
    <>
        <Header />
        <Banner title="Alisveris Sepeti" />
        <CartArea />
        <TotalCart />
        <Footer />
    </>
  )
}

export default Cart