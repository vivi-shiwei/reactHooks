
import React,{useState,useEffect} from 'react'
import App from '../App'
import {
    Box,
    Button
} from '@chakra-ui/core'
const UseEff = ()=> {
  const [count,setCount] = useState(0)
  useEffect(() => {
    alert(`You clicked ${count} times`)
  },[count]);
  return (
    <Box>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </Box>
  );
}
export default { title: 'useEffect' };

export const useEffects = () => App(UseEff);