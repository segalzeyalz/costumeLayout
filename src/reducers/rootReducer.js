import { combineReducers } from 'redux';

import layoutReducer from './layoutReducer';
import componentsReducer from './componentsReducer';
import compElem from './compElementsReducer';

const rootReducer = combineReducers({
    layout:layoutReducer,
    components: componentsReducer,
    compElem:compElem
});

export default rootReducer;