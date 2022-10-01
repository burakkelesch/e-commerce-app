import React from 'react';
import BannerImg from '../../../assets/img/common/man.png';
import { Link } from 'react-router-dom';

const FashionBanner = () => {
  return (
    <>
    <section id="banner_one">
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='banner_text_one'>
                        <h1 className='wow flipInx'>Moda</h1>
                        <h3>%50 Indirim</h3>
                        <Link to="/shop" className='theme-btn-one bg-black btn_md'>Satin Al</Link>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='hero_img'>
                        <img src={BannerImg} alt="Moda"></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default FashionBanner