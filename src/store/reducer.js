import react , { Component}  from 'react';
import ReactDOM from 'react-dom'
import * as actionTypes from './actions';
import obj from './LayoutsArr.js';
import {
    DeafultButton,
    CustomizedBadge,
    CircularDeterminate,
    ControlledOpenSelect,
    SimpleTooltips} from './../components/Comps';

const initialState = {
    layOuts:obj.layoutsArr,
    layout:[],
    selectedLayout:5,
    dragComponent:''
};

const reducer = (state = initialState, action) => {
    let {layOuts} = state;
    switch (action.type) {
        case actionTypes.GET_LAYOUT:
            // Rendering each layout
                let layoutOutlines = [];
                for(let i=0;i<6;i++) {
                    let newY = (parseInt(i/4))*2;
                    let newX = (i%4)*4
                    layoutOutlines = [...layoutOutlines, {i: 'a'+(i+1), x: newX, y: newY, w: 4, h: 2, static: true}];
                }
                
            return {
                ...state,
                layout:layoutOutlines
            }
        case actionTypes.DROP_COMPONENT:
            let {layoutId, positionKey} = action
            let newLayouts= [...layOuts];
            let gridaArr = [...newLayouts[layoutId].gridStructure];
            //Find index in the grid in order to add there
            let idxKey = gridaArr.findIndex((elem)=>{return elem.i==positionKey})
            //adding to comps a new compoent, with a unique id
            gridaArr[idxKey].comps= [...gridaArr[idxKey].comps, {comp:state.dragComponent, id:makeId()}]
            newLayouts[layoutId].gridStructure = [...gridaArr]
            return {
                ...state,
                layOuts:newLayouts,
                dragComponent:''
            }
        case actionTypes.DRAG_COMPONENT:
            let {comp} = action;
            return {
                ...state,
                dragComponent:comp
            }
        case actionTypes.REMOVE:
            let layoutsToRemove = [...state.layOuts]
            //Get layout clicked
            let clickedLayout = layoutsToRemove[action.layoutId].gridStructure
            //Get where the item
            let idxPositionKey = clickedLayout.findIndex(elem=>action.positionKey==elem.i)
            let comps = clickedLayout[idxPositionKey].comps;
            //Check inside compoentns of div where the item is
            let idxToRemove = comps.findIndex(elem=>{return elem.id==action.idOfElement})
            if(idxToRemove!==-1){
                //remove the item clicked
             comps.splice(idxToRemove,1)
            }
            return {
                ...state,
                layOuts:layoutsToRemove
            }
        
    }
    return state;
};

function makeId(){
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()1234567890"
    let rand = ''
    for(let i=0; i<6; i++){
        rand +=letters[Math.floor(Math.random()*letters.length)]
    }
    return rand;
}
export default reducer;
