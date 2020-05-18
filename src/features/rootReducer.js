import { combineReducers } from 'redux';
import { reducer as dataReducer } from './menu';


const rootReducer = combineReducers({
    // add feature reducer here
    menu: dataReducer
})

export {rootReducer}