import React from "react";
import { Link } from "react-router-dom";

//NavigationItem'in constructor'ina parametre gonderiyoruz
//NavigationItems const componentinden bir nesne olusturuldugunda props ile buna veri gonderimi yapiliyor

const NavigationItem =(props) => {

    return(
        <>
        {
            <li className="has-drowdown">
                {/* Menü'nün Ana Basliklari */}
                <a href="#!" className="main-menu-link">
                    {props.item.name}
                    <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                    {props.item.children.map(
                        (subMenu,subMenuIndex) => (
                        <li key={subMenuIndex}>
                            <Link to={subMenu.href}>
                                {subMenu.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
        }
        </>
    )
}

export default NavigationItem