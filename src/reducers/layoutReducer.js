import {
    GET_LAYOUT,
    CHANGE_LAYOUT
} from './../constants/actionTypes';

const initialState = {
    selectedLayout: 0,
    layout: [],
};

const reducer = (state = initialState, action) => {
    let layoutOutlines = [];
    let chosenIdLayout = action.id;
    switch (action.type) {
        case GET_LAYOUT:
            // Rendering each layout
            for (let i = 0; i < 6; ++i) {
                layoutOutlines = [...layoutOutlines, {
                    i: 'a' + i,
                    routeTo: i
                }];
            }
            return {
                ...state,
                layout: layoutOutlines
            }
        case CHANGE_LAYOUT:
            //can use only layout on the range
            return {
                ...state,
                selectedLayout: chosenIdLayout
            }

    }
    return state;
};

export default reducer;