import * as actionTypes from './actionTypes';

export function increaseCounter(){
    return{
        type: actionTypes.INCREASE_COUNTER,
        payload: 1
    } 
}

export function decreaseCounter(){
    return{
        type: actionTypes.DECREASE_COUNTER,
        payload: 1
    }
}
