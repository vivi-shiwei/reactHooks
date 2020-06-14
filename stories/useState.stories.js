
import React,{useState} from 'react'
import {
    Box,
    Button
} from '@chakra-ui/core'
import App from '../App'
const Usesta = ()=> {
  const [count,setCount] = useState(0)
  return (
    <Box>
      <p>Your clicke {count} times</p>
      <Button onClick={()=>setCount(count+1)}>
        click me
      </Button>
    </Box>
  )
}
export default { title: 'useState' };

export const useStates = () => App(Usesta);