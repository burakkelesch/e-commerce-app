import React from "react";
import Banner from '../../components/Common/Banner'
import Header from '../../components/Common/Header'
import Footer from '../../components/Common/Footer'
import OrderCompleted from "../../components/OrderCompleted";
const OrderComplete = () => {

return(
    <>
    <Header />
    <Banner title="Siparişiniz Alındı" />
     <OrderCompleted />
    <Footer />
    </>
)
}
export default OrderComplete