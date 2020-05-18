import { createAction, createReducer } from '@reduxjs/toolkit';


// add to cart, remove from cart, increase amount, decrease amount
// const addToCart = createAction('add to cart');
// const removeFromCart = createAction('remove from cart');
// const increaseAmount = createAction('increase amount');
// const decreaseAmount = createAction('decreaseAmount');
const changeMenu = createAction('menuOptions')

const actions = { changeMenu };


const initialState = {

    type: 'menuOptions',
    status: 'students'

}





const reducer = createReducer(initialState, {
    [changeMenu]: (state, action) => {
        
        return { ...state, status: action.payload }



    }
})


export { actions, reducer };
