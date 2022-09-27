import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';

const TopHeader = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate()

    let status = useSelector((state) => state.user.status);
    let user = useSelector((state) => state.user.user);
    return (
        <>
            <section id="top_header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="top_header_left">
                                <p>Özel koleksiyonlar için...<Link to="/shop">Daha fazlası...</Link></p>
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