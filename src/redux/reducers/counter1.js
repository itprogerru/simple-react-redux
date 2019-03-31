import {ADD, ADD_NUMBER} from "../actions/actionsTypes";

const initialState = {
    counter: 0
}

/**
 * Всегда нужно возвращать новый объект
 * @param state
 * @param action
 * @returns {{counter: number}}
 */
export default function counter1 (state = initialState, action)  {
    switch (action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            };
        case 'SUB':
            return {
                counter: state.counter - 1
            };
        case ADD_NUMBER:
            return {
                counter: state.counter + action.payload
            };
        default:
            return state

    }
}
