import {ADD, ADD_NUMBER} from "./actionsTypes";

export function add () {
    return {
        type: ADD
    }
}

export function addNumber (number) {
    return {
        type: ADD_NUMBER,
        payload: number
    }
}

export function addAsync (number) {
   return (dispatch)=> {
       setTimeout(()=>{
           dispatch(addNumber(number))
       }, 2000)
   }
}