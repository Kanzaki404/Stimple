import { createAction, createReducer } from '@reduxjs/toolkit';


// add to cart, remove from cart, increase amount, decrease amount
// const addToCart = createAction('add to cart');
// const removeFromCart = createAction('remove from cart');
// const increaseAmount = createAction('increase amount');
// const decreaseAmount = createAction('decreaseAmount');
const changeMenu = createAction('menuOptions')
const sideNavToggler = createAction('sideNavToggler')
const LoggedIn = createAction('loggedInAction')
const actions = { changeMenu,sideNavToggler,LoggedIn };


const initialState = {

    type: 'menuOptions',
    status: 'students',
    toggle: false,
    loggedIn: '',
    showLogInScreen: true

}

const reducer = createReducer(initialState, {
    [changeMenu]: (state, action) => {

        return { ...state, status: action.payload, toggle:false }

    },
    [sideNavToggler]: (state, action) => {

         return { ...state, toggle: action.payload }

    },
    [LoggedIn]: (state, action) => {

        return { ...state, loggedIn: action.payload, showLogInScreen:false }

   }
})

export { actions, reducer };
