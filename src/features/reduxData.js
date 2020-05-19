import { createAction, createReducer } from '@reduxjs/toolkit';


// add to cart, remove from cart, increase amount, decrease amount
// const addToCart = createAction('add to cart');
// const removeFromCart = createAction('remove from cart');
// const increaseAmount = createAction('increase amount');
// const decreaseAmount = createAction('decreaseAmount');
const addCourses = createAction('addCourses')

const actions = {addCourses};


const initialState = {

    courses: []

}

const reducer = createReducer(initialState, {
    [addCourses]: (state, action) => {

        return { ...state, courses: action.payload }

    }
})

export { actions, reducer };
