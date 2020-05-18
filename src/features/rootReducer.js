import { combineReducers } from 'redux';
import { reducer as dataReducer } from './data';


const rootReducer = combineReducers({
    // add feature reducer here
    menu: dataReducer
})

export {rootReducer}