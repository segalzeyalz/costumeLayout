import * as actionTypes from './actions';
import react , { Component}  from 'react';

const initialState = {
    layOuts:[{
        id:1,
        layout:[]
    }],
    layout:[],
    selectedLayout:0
};

const reducer = (state = initialState, action) => {
    let {layOuts} = state;
    switch (action.type) {
        case actionTypes.GET_LAYOUT:
            // Rendering each layout
                let layoutOutlines = [];
                let jsxLayout =[]
                for(let i=0;i<6;i++) {
                    let newY = (parseInt(i/4))*2;
                    let newX = (i%4)*4
                    layoutOutlines = [...layoutOutlines, {i: 'a'+i, x: newX, y: newY, w: 4, h: 2, static: true}];
                }
            return {
                ...state,
                layout:layoutOutlines,
            }
    }
    return state;
};

export default reducer;