import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import star from "../assets/star.png"
import discount from "../assets/discount.svg"
import Header from '../Components/Header'
import { useNavigate, useParams } from 'react-router-dom'

const Product = () => {
  const id=useParams();
  // console.log(id.id)
  const navigate=useNavigate()
    const data={
        url:"https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        title:"Nik Baker's",
        dish:"Cakes, pastry,Pastas",
        desc:"Connaught Place, New Delhi",
        color:"#dba58a"
    }
  return (
    <Box backgroundColor={"white"} h={"100vh"}>
      <Header/>
        <Box
    position="relative"
    height="60vh" // Adjust height as needed
    backgroundImage="url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')" // Adjust image URL
    backgroundSize="cover"
    backgroundPosition="center"
    color={"black"}
  >
    <Box bg={"white"} h={"40px"} w={"40px"} position={"absolute"} top="10" left="4" display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"10px"} onClick={()=>{navigate("/home")}}  >
        <ChevronLeftIcon h={"30px"} w={"30px"}/>
    </Box>
    <Box
      position="absolute"
      bottom="0"
      left="0"
      width="100%"
      padding="20px"
      bg="white"
      borderRadius={"40px 40px 0 0"}
    >
      <Flex justifyContent={"space-between"}  alignItems={"center"}>
      <Flex flexDir={"column"} justifyContent={"start"}  >
                <Text fontSize={"22px"} fontWeight={"500"}>{data.title}</Text>
              
                <Text fontSize={"16px"} fontWeight={"300"}>{data.desc}</Text>
            </Flex>
        <Flex alignItems={"center"} gap={2} >
                        <Image h={"18px"} src={star}/>
                        <Text fontWeight={"500"} lineHeight={"15px"}>4.5</Text>
                    </Flex>
      </Flex>
      <Flex gap={2} mt={3}  >
                <Image src={discount}/>
                <Text color={data.color} >4 Offers trending</Text>
        </Flex>
        <Flex mt={4}>
            <Text fontSize={"16px"}>
            Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache
            </Text>
        </Flex>
    </Box>
  </Box>
    </Box>
  )
}

export default Product