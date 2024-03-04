import { Flex, useColorModeValue } from '@chakra-ui/react';
import './App.css';
import Welcome from './Authorization/Welcome';
import AllRoutes from './AllRoutes/AllRoutes';
import Header from './Components/Header';

function App() {
  
  const color = useColorModeValue('white', 'gray.800')
  localStorage.removeItem('chakra-ui-color-mode');
  return (
    <Flex  h={{base:"100%",md:"100vh"}}  justifyContent={"center"} w="100%" margin={"auto"} bg={"red.500"}    >
    <Flex margin={"auto"} w={{base:"100%",md:"100%",lg:"414px"}}  h={{base:"100%",md:"90vh"}} flexDir={"column"} overflow={"scroll"} bg={color}  >
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Welcome/> */}
      <AllRoutes/>
      {/* <Header/> */}
    </Flex>
    </Flex>
  );
}

export default App;
