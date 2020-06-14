import React,{useReducer} from 'react'
import App from '../App'
import {
    Box,
    Button
} from '@chakra-ui/core'

const myReducer = (state, action) => {
  if(action.type==='countUp'){
    return {
      count: state.count + 1
    }
  }
  else return state
}

const UseRedu = ()=> {
  const [state, dispatch] = useReducer(myReducer, { count: 0 })

  return (
    <Box className="App">
      <Button onClick={() => dispatch({ type: 'countUp' })}>
        +1
      </Button>
      <p>Count: {state.count}</p>
    </Box>
  );
}

export default { title: 'useReducer' };

export const useReducers = () => App(UseRedu);