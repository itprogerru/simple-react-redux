import {combineReducers} from 'redux'

import counter from './reducers/counter1'
import counter2 from './reducers/counter2'

export default combineReducers({
    counter,
    counter2
})