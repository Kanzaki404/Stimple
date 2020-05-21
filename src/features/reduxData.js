import { createAction, createReducer } from '@reduxjs/toolkit';


// add to cart, remove from cart, increase amount, decrease amount
// const addToCart = createAction('add to cart');
// const removeFromCart = createAction('remove from cart');
// const increaseAmount = createAction('increase amount');
// const decreaseAmount = createAction('decreaseAmount');
const addCourses = createAction('addCourses')
const currentCourse = createAction('currentCourse')
const addAssig = createAction('addAssig')

const actions = {addCourses,currentCourse,addAssig};


const initialState = {

    courses: [],
    currentCourseName: '',
    currentCourseData: [],
    currentID: ''


}

const reducer = createReducer(initialState, {
    [addCourses]: (state, action) => {
        //, currentCourseData:action.payload[0].assignments
        console.log('asfsaffaf', action.payload)
        return { ...state, courses: action.payload, currentCourseName: 'Choose Course'  }

    },
    [currentCourse]: (state, action) => {

        //console.log('the arrat of assigs',state)
        return { ...state, currentCourseName: action.payload.courseName, currentCourseData:action.payload.assignments, currentID:action.payload._id }

    },
    [addAssig]: (state, action) => {

        console.log('PayLoad' + action.payload)
       action.payload.forEach(e=>console.log('Each ELEMENT',e))
        //console.log('the arrat of assigs',state)
        return { ...state, currentCourseData:action.payload }

    }
})

export { actions, reducer };
