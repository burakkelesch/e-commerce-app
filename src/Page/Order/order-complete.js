import React from "react";
<<<<<<< HEAD
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
=======
import Banner from "../../components/Common/Banner";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
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

>>>>>>> 3d8c0c5cbfc28590372484dc47e6e4d4169170b1
export default OrderComplete