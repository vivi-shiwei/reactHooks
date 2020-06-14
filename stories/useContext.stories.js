
import React,{useState,useContext} from 'react'
import App from '../App'
import {
    Box,
    Button
} from '@chakra-ui/core'
const AppContext = React.createContext({})
const Navbar = () => {
  const { username } = useContext(AppContext);
  return (
    <Box>
      <p>AwesomeSite</p>
      <p>{username}</p>
    </Box>
  );
}
const Messages = () => {
  const { username } = useContext(AppContext)
  return (
    <div>
      <h1>Messages</h1>
      <p>1 message for {username}</p>
      <p>useContext is awesome!</p>
    </div>
  )
}
const UseCont = ()=> {
  const [count,setCount] = useState(0)
  return (
    <AppContext.Provider value={{
      username: count
    }}>
      <div>
    <Button onClick={()=>setCount(count+1)}>click me</Button>
        <Navbar />
        <Messages />
      </div>
    </AppContext.Provider>
  );
}
export default { title: 'useContext' };

export const useContexts = () => App(UseCont);