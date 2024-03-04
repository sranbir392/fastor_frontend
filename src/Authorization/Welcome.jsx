import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import welcomeImg from "../assets/welcomeImg.png";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate=useNavigate()
  return (
    <Flex justifyContent={"center"} alignContent={"center"} gap={4} flexDir={"column"}>
        <Flex justifyContent={"center"} alignItems={"center"} mt={10}>
             <Image src='https://www.fastor.ai/_next/static/media/Logo.5a0cac78.png'/>
        </Flex>
        <Flex backgroundColor="white" justifyContent={"center"} alignItems={"center"} p={5}  width={"280px"} alignSelf={"center"} borderRadius={"50%"}>
            <Image src={welcomeImg} alt="Welcome fastor"/>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"} gap={4}>
          <Text fontSize={"28px"} letterSpacing={"1px"}>Welcome</Text>
          <Text w={"70%"}>
          It’s a pleasure to meet you. We are excited that you’re here so let’s get started!
          </Text>
          <Button w={"70%"} p={3} fontSize={"14px "} letterSpacing={"2px"} backgroundColor={"#FF6D6A"} color={"white"} onClick={()=>navigate("/login")}>
            GET STARTED
          </Button>
        </Flex>
    </Flex>
  )
}

export default Welcome;