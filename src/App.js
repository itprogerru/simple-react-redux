import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import Counter from "./Counter";
import {add, addAsync, addNumber} from "./redux/actions/action";

class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
            {this.props.counter}
        </div>
        <button onClick={this.props.onAdd} >+1</button>
          <button onClick={this.props.onSub}>-1</button>
          <button onClick={() => this.props.onAddNumber(15)} >+15</button>
          <button onClick={this.props.onAddNumber.bind(this,-15)}>-15</button> { /* можно забаиднить*/ }
          <button onClick={()=>this.props.onAsyncAdd(100)}>Асинхронно</button> {/* можно через стрелочную функцию */}
        <hr />
        <Counter />
      </div>
    );
  }
}

/**
 * Возвращаем из обшего стейта в пропс компонента значение
 * @param state
 */
function mapStateToProps (state) {
  return {
    counter: state.counter.counter,
  }
}

/**
 * Диспачет новые функции
 * @param dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
     // onAdd: () => dispatch({type: 'ADD'}),
      onAdd: () => dispatch(add()),
      onSub: () => dispatch({type: 'SUB'}),
      // onAddNumber: (number) => dispatch({type: 'ADD_NUMBER', payload: number})
      onAddNumber: (number) => dispatch(addNumber(number)),
      onAsyncAdd: number => dispatch(addAsync(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
