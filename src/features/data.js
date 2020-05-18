import { createAction, createReducer } from '@reduxjs/toolkit';


// add to cart, remove from cart, increase amount, decrease amount
// const addToCart = createAction('add to cart');
// const removeFromCart = createAction('remove from cart');
// const increaseAmount = createAction('increase amount');
// const decreaseAmount = createAction('decreaseAmount');
const changeMenu = createAction('students')

const actions = { changeMenu };


const initialState = [
    // {
    //     product: { name: 'Otto', price: 1000 },
    //     count: 1
    // }
]

const reducer = createReducer(initialState, {
    [changeMenu]: (state, action) => {
        console.log(state, action)
       

    }
})










export { actions, reducer };
