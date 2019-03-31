Небольшое описание
```javascript
export default connect(mapStateToProps, mapDispatchToProps)(App);
```
где mapStateToProps - из store береуться значения и передаеться в компонент

mapDispatchToProps - из компонент передаеться в сторе через фуркцию {type: '', payload: ''};

```javascript
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
```

addNumber(number) - это action по правилу выносяться в файл action.js

```javascript
export function addNumber (number) {
    return {
        type: ADD_NUMBER,
        payload: number
    }
}
```

ADD_NUMBER - это константы при которых срабатывают редусеры, должны быть уникальными

```javascript
export default function counter1 (state = initialState, action)  {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                counter: state.counter + action.payload
            };
        default:
            return state

    }
}
```
как только редусур увидел что сработала какая то константа он возвращает новый состоятние store c изменеными данными
который храняться в payload.