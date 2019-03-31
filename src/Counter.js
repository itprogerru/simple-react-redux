import React, {Component} from 'react';
import {connect} from "react-redux";
import {addAsync} from "./redux/actions/action";

class Counter extends Component{
    render() {
        return (
            <div>
            <h1>COunter {this.props.counter}</h1>
<button onClick={()=>this.props.onAdd2(1)}>Add</button>

            </div>
        )
    }
}
/**
 * Возвращаем из обшего стейта в пропс компонента значение
 * @param state
 */
function mapStateToProps (state) {
    return {
        counter: state.counter2.counter,
    }
}

/**
 * Диспачет новые функции
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
         onAdd2: (number) => dispatch({type: 'ADD2', payload: number}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);