import React,{useReducer} from 'react'

const myReducer = (state, action) => {
  if(action.type==='countUp'){
    return {
      count: state.count + 1
    }
  }
  else return state
}

const HomePage = ()=> {
  const [state, dispatch] = useReducer(myReducer, { count: 0 })

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: 'countUp' })}>
        +1
      </button>
      <p>Count: {state.count}</p>
    </div>
  );
}

export default { title: 'useReducer' };

export const FetchMore = () => App(HomePage);