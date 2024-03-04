import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const TasteCard = (props) => {
  const{id,image,name,locality,state}={...props};
  const navigate=useNavigate();
  return (
    <Flex w={"140px"} h={"200px"} flexDir={"column"} borderRadius={"20px"} overflow={"hidden"} onClick={()=>navigate(`/product/${id}`)}  >
        <Image h={"70%"} src={image}/>
        <Flex flexDir={"column"} backgroundColor={"#f8cfd5"} color={"black"} p={2} h={"30%"} >
            <Text fontSize={"12px"} fontWeight={"500"} >{name}</Text>
            <Text fontSize={"10px"}>{locality} {state}</Text>
            

        </Flex>

    </Flex>
  )
}

export default TasteCard