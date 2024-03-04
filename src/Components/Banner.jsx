import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import wallet from "../assets/wallet.png";
import offers from "../assets/offers.png";
const Banner = () => {
  return (
    <Flex w={"90%"} mt={3}  borderRadius={"10px"} marginLeft={"auto"} marginRight={"auto"} p={3}>
      <Flex flexDir={"column"} w={"50%"}  >
        <Text fontSize={"24px"} fontWeight={"600"} >Ranbir Singh</Text>
        <Text fontSize={"16px"} fontWeight={"400"} >Let's explore this evening</Text>
      </Flex>
      <Flex w={"50%"} justifyContent={"end"} gap={1}>
      <Flex flexDir={"column"} w={"30%"}  justifyContent={"center"} alignItems={"center"}>
          <Image h={"40px"} w={"40px"} src={offers} />
          <Text fontSize={"12px"} fontWeight={"400"} >Offers</Text>
        </Flex>
        <Flex flexDir={"column"} w={"40%"}  justifyContent={"center"} alignItems={"center"}>
          <Image h={"40px"} w={"40px"} src={wallet} />
          <Text fontSize={"12px"} fontWeight={"400"} >Wallet</Text>
        </Flex>
        
      </Flex>
    </Flex>
  )
}

export default Banner