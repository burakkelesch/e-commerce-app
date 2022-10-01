import {createSlice} from "@reduxjs/toolkit";
import { ProductData } from "../data/ProductData";
import Swal from "sweetalert2";


const productSlice = createSlice( {
    name :'products',
    initialState: {
        products : ProductData,
        favorites : ProductData.slice(1,3),
        carts: ProductData.slice(1,4),
        single : null, // her bir ürünü temsil eder
    },

    reducers : {
        // sepete ürün eklemek icin kullanilacak
        addToCart:(state,action) => {
            let {id} = action.payload;
            let sepeteEklenecekUrun = state.carts.find(item => item.id === parseInt(id))
            if(sepeteEklenecekUrun === undefined)
            {
                //Sepete eklemek istedigim ürünün bilgilerini getiricek ilgili rest servisi cagirilir
                let item = state.products.find(item => item.id === parseInt(id))
                item.quantity =1
                state.carts.push(item)
                Swal.fire(
                    {
                        title : 'Basarili!',
                        text : "Sepete Eklendi!",
                        icon : 'succes',
                        showConfirmButton : false,
                        timer : 2000
                    }
                )
            }
        },

        getProductById: (state,action) => {
            let {id} = action.payload;
            let urunDetay = state.products.find(item => item.id === parseInt(id))
            state.single = urunDetay
        },

        updateCart : (state,action) => {
           let {val,id} = action.payload;
           state.carts.forEach(item=> {
            if(item === parseInt(id)) 
            {
                item.quantity = val
            }
           })
        },

        removeCart : (state,action) => {
            let {id} = action.payload;
            let sepetinEnSonHali = state.carts.filter(item => item.id !== parseInt(id))
            state.carts = sepetinEnSonHali
        },
        //Sepeti komple temizlemek icin
        clearCart : (state) => {
            state.carts = []
        },

        addToFavorites:(state,action) => {
            let {id} = action.payload;
            let favorilereEklenecekUrun = state.favorites.find(item => item.id ===parseInt(id))
            if(favorilereEklenecekUrun === undefined)
            {
                let item = state.products.find(item => item.id === parseInt(id))
                item.quantity =1
                state.favorites.push(item)
                Swal.fire(
                    {
                        title : 'Basarili!',
                        text : "Favorilere Eklendi!",
                        icon: 'success',
                        showConfirmButton : false,
                        timer : 2000
                    }
                )
            }

            else
            {
                Swal.fire(
                    {
                    title : 'Basarisiz!',
                        text : "Ürün zaten favorilerinizde!",
                        icon: 'warning',
                        showConfirmButton : false,
                        timer : 2000
                }
                )
            }
        },

        removeToFav : (state,action) => {
            let {id} = action.payload;
            let favorilerinEnSonHali = state.favorites.filter(item => item.id !== parseInt(id))
            state.favorites = favorilerinEnSonHali
        },

    }
})

const productsReducer = productSlice.reducer
export default productsReducer