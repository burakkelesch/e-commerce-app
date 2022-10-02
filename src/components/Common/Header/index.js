import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import {MenuData} from "./MenuData";
import NavigationItem from './NavigationItem';
import logo from "../../../assets/img/logo.png";
import { useSelector } from 'react-redux';


const Header = () => {
  let carts = useSelector((state) => state.products.carts);
  let favorites = useSelector((state) =>state.products.favorites);
  const [click,setClick] = useState(false);
  const handleClick = () =>{
    if(click) {
        document.querySelector("#offcanvas-add-cart").style = ("transform : translateX(100%);")
    }
    else
    {
        document.querySelector("#offcanvas-add-cart").style = ("transform : translateX(0%);")
    }
    setClick(click);
  }
  return (
    <div>
      <header className="header-section d-none d-xl-block">
                <div className="header-wrapper">
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
                                                <a href="#" className="offcanvas-toggle">
                                                    <i className="fa fa-heart"></i>
                                                    <span className="item-count">{favorites.length}</span>
                                                </a>
                                                :
                                                <a href="#"><i className="fa fa-heart"></i></a>
                                            }
                                           
                                        </li>
                                        <li>
                                            {
                                                carts.length ?
                                                   <a href="#!" className="offcanvas-toggle" onClick={handleClick} >
                                                    <i className="fa fa-shopping-bag"></i>
                                                    <span className="item-count">{carts.length}</span></a>
                                                    :
                                                    <a href="#"><i className="fa fa-shopping-bag"></i></a>
                                            }
                                          
                                              
                                        </li>
                                        <li>
                                            <a href="#" className="search_width"><i class="fa-solid fa-magnifying-glass"></i></a>
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
                <div className='offcanvas-add-cart-wrapper'>
                    <h4 className='offcanvas-title'>Alisveris Sepeti</h4>
                </div>
            </div>
    </div>
  )
}

export default Header


   