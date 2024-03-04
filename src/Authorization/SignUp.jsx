import { Button, Flex, Image, Input, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import OtpInput from './Otp'

const SignUp = () => {
  const color = useColorModeValue('white', 'gray.800')
  const number=JSON.parse(localStorage.getItem("number"));

  return (
    <Flex justifyContent={"center"} alignItems={"center"} alignSelf={"center"} flexDir={"column"} gap={6} w={{base:"100%",md:"400px",lg:"400px"}} mt={8} color={color}>
      <Flex justifyContent={"center"} alignItems={"center"} mt={10}>
             <Image src='https://www.fastor.ai/_next/static/media/Logo.5a0cac78.png'/>
      </Flex>
      <Flex flexDir={"column"} justifyContent={"start"} alignItems={"flex-start"} gap={2} w={"80%"}>
        <Text fontSize={"26px"} fontWeight={"600"} lineHeight={"33px"} color={"#1E232C"}>OTP Verification</Text>
        <Text fontSize={"14px"} fontWeight={"400" } color={"#8391A1"}>Enter the verification code we just sent on your Mobile Number.</Text>
      </Flex>
      <Flex flexDir={"column"} w={"80%"}  gap={6} >
        {/* <Input type='number ' maxLength={1} /> */}
        <OtpInput number={number}/>
      </Flex>

    </Flex>
  )
}

export default SignUp