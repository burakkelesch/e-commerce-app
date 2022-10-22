import React from "react";
import Banner from "../../components/Common/Banner";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import WishArea from "../../components/WishList";


const Favorites = () => {
    return(
        <>
        <Header />
        <Banner title="Favoriler" />
        <WishArea />
        <Footer />
        </>
    )
}

export default Favorites