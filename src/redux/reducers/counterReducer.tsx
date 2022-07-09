import * as actionTypes from '../actions/actionTypes';

export default function counterReducer(state = 0, action){
    let newState;
    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            console.log(action.payload);
            
            return (newState = state + action.payload);
        case actionTypes.DECREASE_COUNTER:
            return (newState = state + action.payload)
        default:
            return state;
    }
}