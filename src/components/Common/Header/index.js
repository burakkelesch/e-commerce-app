import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import {MenuData} from "./MenuData";
import NavigationItem from './NavigationItem';
import logo from "../../../assets/img/logo.png";
import { useSelector , useDispatch } from 'react-redux';
import cancelSvg from '../../../assets/img/svg/cancel.svg';
import searchSvg from '../../../assets/img/svg/search.svg';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



const Header = () => {
  let carts = useSelector((state) => state.products.carts);
  let favorites = useSelector((state) =>state.products.favorites);
  const [click,setClick] = useState(false);
  let dispatch = useDispatch();
  let history = useNavigate();

  {/* Sepet kismi */}
  const removeCartProduct = (id) => {
    dispatch({type : "products/removeCart",payload: {id}})
  }

  const handleClick = () =>{
    if(click) {
        document.querySelector("#offcanvas-add-cart").style = ("transform : translateX(100%);")
    }
    else
    {
        document.querySelector("#offcanvas-add-cart").style = ("transform : translateX(0%);")
    }
    setClick(!click);
  }

  const sepetToplamFiyat = () => {
    return carts.reduce(function (total,item) {
        return total + ((item.quantity || 1) * item.price)},0)
  }

  {/* Fav kismi */}

  const handleWish = () => {
    if (click) {
        document.querySelector("#offcanvas-wishlish").style = ("transform: translateX(100%);")
    } else {
        document.querySelector("#offcanvas-wishlish").style = ("transform: translateX(0);")
    }
    setClick(!click);
}

const rmFavProduct = (id) => {
    dispatch({ type: "products/removeToFav", payload: { id } });
}

{/* Search Kismi */}

const handleSearch = () => {
    if(click) {
        document.querySelector("#search").style = ("transform: translate(-100%,0);opacity :0")
    }
    else
    {
        document.querySelector("#search").style = ("transform: translate(0px,0px);opacity :1")
    }
    setClick(!click);
}

  return (
    <div>
      <header className="header-section d-none d-xl-block">
                <div className="header-wrapper">
                    {/* Cart Listesi Popup Basladi  */}
                    <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex align-items-center justify-content-between">
                                    <div className="header-logo">
                                        <div className="logo">
                                            <Link to="/"><img src={logo} alt="logo" /></Link>
                                        </div>
                                    </div>
                                    {/* Burası menüyü oluşturan bölüm */}
                                    <div className="main-menu menu-color--black menu-hover-color--golden d-none d-xl-block">
                                        <nav>
                                            <ul>
                                                {/* MenuData nın içindeki her bir json objesi için li oluşturulur */}
                                                {MenuData.map((item, index) => (
                                                    <NavigationItem item={item} key={index} />
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                    <ul className="header-action-link action-color--black action-hover-color--golden">
                                        <li>
                                            {
                                                favorites.length ?
                                                <a href="#" className="offcanvas-toggle" onClick={handleWish}>
                                                    <i className="fa fa-heart"></i>
                                                    <span className="item-count">{favorites.length}</span>
                                                </a>
                                                :
                                                <a href="#" onClick={handleWish}><i className="fa fa-heart"></i></a>
                                            }
                                           
                                        </li>
                                        <li>
                                            {
                                                carts.length ?
                                                   <a href="#!" className="offcanvas-toggle" onClick={handleClick} >
                                                    <i className="fa fa-shopping-bag"></i>
                                                    <span className="item-count">{carts.length}</span></a>
                                                    :
                                                    <a href="#" onClick={handleClick}><i className="fa fa-shopping-bag"></i></a>
                                            }
                                          
                                              
                                        </li>
                                        <li>
                                            <a href="#" className="search_width" onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="offacnvas offside-about offcanvas-toggle"><i class="fa fa-bars"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div id='offcanvas-add-cart' className='offcanvas offcanvas-rightside offcanvas-add-cart-section'>
                <div className='offcanvas-header text-right'>
                    <button className='offcanvas-close' onClick={handleClick}>
                        <img src={cancelSvg} alt="cancel"></img>
                    </button>
                </div>
                <div className='offcanvas-add-cart-wrapper'>
                    <h4 className='offcanvas-title'>Alisveris Sepeti</h4>
                    <ul className='offcanvas-cart'>
                        {carts.map((data,index) => (
                            <li className='offcanvas-wishlist-item-single' key={index}>
                                <div className='offcanvas-wishlist-item-block'>
                                <Link to={`/product/details-two/${data.id}`} className="offcanvas-wishlist-image">
                                <img src={data.img} alt={data.img} className="offcanvas-wishlist-item-image-link" ></img>
                                </Link>
                                <div className='offcanvas-wishlist-item-content'>
                                    <Link to={`/product/details-two/${data.id}`}>{data.title}</Link>
                                    <div className='offcanvas-wishlist-item-details'>
                                        <span className='offcanvas-wishlist-item-details-quantity'>
                                        {data.quantity || 1} x &nbsp;
                                        </span>
                                        <span className='offcanvas-wishlist-item-details-price'>
                                            {data.price} Tl
                                        </span>
                                    </div>
                                </div>
                                </div>
                                <div className='offcanvas-wishlist-item-delete text-right'>
                                    <a href='#!' className='offcanvas-wishlist-item-delete' onClick={() => removeCartProduct(data.id)}>
                                        <i className='fa fa-trash'></i>
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='offcanvas-cart-total-price'>
                        <span className='offcanvas-cart-total-price-text'>
                            Toplam :
                        </span>
                        <span className='offcanvas-cart-total-price-value'>
                            {sepetToplamFiyat()}.00 TL
                        </span>
                    </div>
                </div>
                <ul className='offcanvas-cart-action-button'>
                <li>
                    <Link to="/cart" className='theme-btn-one btn-black-overlay btn_md'>Sepete Git</Link>
                </li>
                <li>
                    <Link to="/checkout-two" className='theme-btn-one btn-black-overlay btn_md'>Alisverisi Tamamla</Link>
                </li>
            </ul>
            </div>
            {/* Cart Listesi Popup Bitti  */}

             {/* Favori Listesi Popup Başladı  */}
             <div id="offcanvas-wishlish" className="offcanvas offcanvas-rightside offcanvas-add-cart-section">
                <div className="offcanvas-header text-right">
                    <button className="offcanvas-close" onClick={handleWish}>
                        <img src={cancelSvg} alt="icon" />
                    </button>
                </div>
                <div className="offcanvas-wishlist-wrapper">
                    <h4 className="offcanvas-title">Favoriler</h4>



                   <ul className="offcanvas-wishlist">
                        {favorites.map((data, index) => (
                            <li className="offcanvas-wishlist-item-single" key={index}>
                                <div className="offcanvas-wishlist-item-block">
                                    <Link to={`/product-details-one/${data.id}`}
                                    className="offcanvas-wishlist-item-image-link" >
                                        <img src={data.img} alt="img"
                                            className="offcanvas-wishlist-image" />
                                    </Link>
                                    <div className="offcanvas-wishlist-item-content">
                                        <Link to={`/product-details-one/${data.id}`}
                                         className="offcanvas-wishlist-item-link">{data.title}</Link>
                                        <div className="offcanvas-wishlist-item-details">
                                            <span className="offcanvas-wishlist-item-details-quantity">1 x
                                            </span>
                                            <span className="offcanvas-wishlist-item-details-price">
                                                {data.price}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="offcanvas-wishlist-item-delete text-right">
                                    <a href="#!" className="offcanvas-wishlist-item-delete"
                                    onClick={() => rmFavProduct(data.id)}><i className="fa fa-trash"></i></a>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="offcanvas-wishlist-action-button">
                        <li>
                            <Link to="/wishlist" className="theme-btn-one btn-black-overlay btn_md">
                                Favori Listesi</Link>
                        </li>
                    </ul>
                </div>
            </div>
           {/* Favori Listesi Popup Bitti  */}

           {/* Search Pop'u Basladi */}
           <div id="search" className="search-modal">
                <button type="button" className="close" onClick={handleSearch}><img src={searchSvg} alt="icon" />
                </button>
                <form onSubmit={(e) => { e.preventDefault(); handleSearch();
                     Swal.fire('Success', 'Sonuçlara göz atın', 'success');history('/shop/shop-left-sidebar');
                    }}>
                    <input type="search" placeholder="Ürün adı, markası." required />
                    <button type="submit" className="btn btn-lg btn-main-search">Ara</button>
                </form>
            </div>
           {/* Search Pop'u Bitti */}

    </div>
  )
}

export default Header


   