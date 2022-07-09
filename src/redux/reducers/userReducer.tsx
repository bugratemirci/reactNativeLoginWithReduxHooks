import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state=initialState.currentUser,action){
    let newState;
    switch (action.type) {
        case actionTypes.SET_USER:
            return (newState = action.payload);
        default:
            console.log("action");
            
            return state;
    }
}