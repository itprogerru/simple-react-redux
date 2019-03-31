const initialState = {
    counter: 10
}

/**
 * Всегда нужно возвращать новый объект
 * @param state
 * @param action
 * @returns {{counter: number}}
 */
export default function counter2 (state = initialState, action)  {
    switch (action.type) {
        case 'ADD2':
            return {
                counter: state.counter + action.payload
            };
        default:
            return state

    }
}