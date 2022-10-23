import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import avatar from '../../../assets/img/common/1avater.png';

const TopHeader = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate()
    let status = useSelector((state) => state.user.status);
    let user = useSelector((state) => state.user.user);

    const logout = () => {
        Swal.fire ({
            icon :'success',
            title : 'Çıkış Başarılı',
            text : 'Teşekkürler'
        })
        dispatch({type :"user/logout"})
        navigate("/")
    }
  
    return (
        <>
            <section id="top_header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="top_header_left">
                                <p>Özel koleksiyonlar için...<Link to="/shop/shop-left-sidebar">Daha fazlası...</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="top_header_right">
                                {
                                    !status ?
                                        <ul className="right_list_fix">

                                            <li><Link to="/login"><i className="fa fa-user"></i>
                                             Giriş Yap</Link></li>
                                            <li><Link to="/register"><i className="fa fa-lock"></i>
                                             Kayıt Ol</Link></li>
                                        </ul>
                                        :
                                        <ul className="right_list_fix">
                                        <li><Link to="/order-tracking"><i className="fa fa-truck">
                                            </i> Siparişinizi Takip Edin!</Link></li>
                                        <li className="after_login"><img src={avatar} alt="avater" /> 
                                        {user.name} <i className="fa fa-angle-down"></i>
                                            <ul className="custom_dropdown">
                                                <li><Link to="/my-account/customer-order">
                                                    <i className="fa fa-cubes"></i> Siparişlerim</Link></li>
                                                <li><Link to="#!" onClick={() => { logout() }} >
                                                    <i className="fa fa-sign-out"></i> Çıkış Yap</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopHeader