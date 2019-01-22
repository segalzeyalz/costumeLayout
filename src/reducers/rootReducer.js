import {combineReducers} from 'redux';

import layoutReducer from './layoutReducer';
import componentsReducer from './componentsReducer';

const rootReducer = combineReducers({
    layout:layoutReducer,
    components: componentsReducer,
});

export default rootReducer;