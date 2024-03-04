import { Button, Flex, FormLabel, Image, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [number,setNumber]=useState("");
  const navigate=useNavigate();
  const toast=useToast()
  // const color = useColorModeValue('white', 'gray.800')
  const handleClick = () => {
    // console.log("click");
    if (number.length < 10) {
      toast({
        title: 'Incorrect Number',
        description: "Check Your Number",
        status: 'error', // Use 'error' status for failed toast
        duration: 2000,
        isClosable: true,
      });
    } else {
      // Redirect to another page if number is valid
      toast({
        title: 'Otp Sent',
        description: "Check your device for OTP",
        status: 'success', // Use 'error' status for failed toast
        duration: 2000,
        isClosable: true,
      });
      localStorage.setItem("number",JSON.stringify(number));
      navigate('/signup');
    }
  };
  return (
    <Flex  pt={16} alignItems={"center"}  flexDir={"column"} gap={6} w={{base:"100%",md:"400px",lg:"400px"}}  bg={"white"} h={"100vh"}>
      <Flex justifyContent={"center"} alignItems={"center"} >
             <Image src='https://www.fastor.ai/_next/static/media/Logo.5a0cac78.png'/>
      </Flex>
      <Flex flexDir={"column"} justifyContent={"start"} alignItems={"flex-start"} gap={2} >
        <Text fontSize={"26px"} fontWeight={"600"} lineHeight={"33px"} color={"#1E232C"}>Enter Your Mobile Number</Text>
        <Text fontSize={"14px"} fontWeight={"400" } color={"#8391A1"}>We will send you the 4 digit verification code</Text>
      </Flex>
      <Flex flexDir={"column"} w={"80%"}   color={"black"} >
        <FormLabel fontSize={"14px"} fontWeight={"400" } color={"#8391A1"}>Enter Your Number</FormLabel >
        <Input type="number" maxLength={10} placeholder='Enter your Number' color={"black"} border={"1px solid black"}   onChange={(e)=>{setNumber(e.target.value.slice(0, 10))}} value={number||""}  />
        <Button mt={4} onClick={handleClick} disabled={number.length<10} p={3} fontSize={"14px "} letterSpacing={"2px"} backgroundColor={"#FF6D6A"} color={"white"} >SEND CODE</Button>
      </Flex>

    </Flex>
  )
}

export default Login