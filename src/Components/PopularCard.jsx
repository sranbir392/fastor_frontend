import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import discount from "../assets/discount.svg"
import star from "../assets/star.png"
import { useNavigate } from 'react-router-dom'
const PopularCard = (props) => {
  const{id,image,name,locality,state}={...props};
const navigate=useNavigate()
    const data={
        // url:"https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        // title:"Nik Baker's",
        dish:"Cakes, pastry,Pastas",
        // desc:"Connaught Place, New Delhi",
        color:"#dba58a"
    }
  return (
    <Flex gap={4} p={2} backgroundColor={"white"} borderRadius={"20px"} onClick={()=>navigate(`/product/:${id}`)}>
        <Flex w="40%" borderRadius={"20px"} overflow={"hidden"}>
            <Image  src={image}/>
        </Flex>
        <Flex flexDir={"column"} gap={2} >
            <Flex flexDir={"column"} justifyContent={"start"} color={"#5b5955"} >
                <Text fontSize={"18px"} fontWeight={"700"}>{name}</Text>
                <Text fontSize={"14px"} fontWeight={"300"}>{data.dish}</Text>
                <Text fontSize={"14px"} fontWeight={"300"}>{locality}{state}</Text>
            </Flex>
            <Flex gap={2} >
                <Image src={discount}/>
                <Text color={data.color} >4 Offers trending</Text>
            </Flex>
            <Flex justifyContent={"space-between"} fontSize={"14px"} alignItems={"baseline"}  >
                <Flex flexDir={"column"} alignItems={"baseline"}>
                    <Flex alignItems={"center"} gap={1} >
                        <Image h={"15px"} src={star}/>
                        <Text fontWeight={"500"} lineHeight={"15px"}>4.5</Text>
                    </Flex>
                    <Text fontSize={"12px"} color={"#5b5955"} fontWeight={"300"} mt={1}>Popularity</Text>
                </Flex>
                <Flex flexDir={"column"} gap={1}>
                    <Flex><Text fontWeight={"500"} lineHeight={"15px"}>$ 200</Text></Flex>
                    <Text color={"#5b5955"} fontSize={"12px"} fontWeight={"200"}>Cost of two</Text>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default PopularCard