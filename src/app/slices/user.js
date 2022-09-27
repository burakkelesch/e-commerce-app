import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name :'user',
    initialState : {
        status : false,
        user : {}
    },
    reducers : {
        login:(state) => {
            state.status = true
            //rest api den gelen veriye gore de degistirilebilir
            state.user = {
                name: 'Burak',
                role : 'Customer',
                email : 'brk@kls.com',
                pass: '123456'
            }
        },

        register :(state,action)=> {
            let {name,email,pass} = action.payload;
            state.status = true
            state.user = {
                name : name,
                role : 'customer',
                email : email,
                pass : pass
            }
        },

        logout : (state) => {
            state.status = false
            state.user = {

            }
        },
    }
})

const userReducer = userSlice.reducer
export default userReducer