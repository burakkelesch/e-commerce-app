import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai"

//Her bir ürünü temsil edecek
const ProductCard = (props) => {


    let dispatch = useDispatch();

    const sepeteEkle = async(id) => {
        dispatch({type :"products/addToCart",payload : {id}})
    }

    const favorilereEkle = async(id) => {
        dispatch({type :"products/addToFavorites",payload : {id}})
    }

    return(
        <>
            <div className="product_wrappers_one">
                <div className="thumb">
                    <Link to={`/product-details-two/${props.data.id}`} className="image">
                        <img src={props.data.img} alt={props.data.title} /> 
                       {/* <img className="hover-image" src={props.data.hover_img} alt={props.data.title} /> */}
                    </Link>
                    <span className="badges">
                    <span className={(['yaz','yeni','satışta'][Math.round(Math.random()*2)])} >
                        {props.data.labels}
                    </span>
                   </span>
                   <div className="actions">
                        <a href="#!" className="action wishlist" title="Favorilere Ekle"
                        onClick={() => favorilereEkle(props.data.id)}><AiOutlineHeart />
                        </a>
                    </div>
                    <button type="button" className="add-to-cart offcanvas-toggle" onClick={() => sepeteEkle(props.data.id)}
                        >   Sepete Ekle
                        </button>
                </div>
                
            </div>
        </>
    )
}

export default ProductCard