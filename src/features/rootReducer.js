import { combineReducers } from 'redux';
import { reducer as dataReducer } from './menu';
import { reducer as reduxData } from './reduxData';


const rootReducer = combineReducers({
    // add feature reducer here
    menu: dataReducer,
    courses : reduxData
})

export {rootReducer}