import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import PopularCard from './PopularCard'

const Popular = (props) => {
  const {data}={...props};
  // console.log(data)
  return (
    <Flex flexDir={"column"} p={3} >
        <Text fontSize={"20px"} fontWeight={"700" }  p={2}>Popular Ones</Text>
        <Flex flexDir={"column"} gap={2}>
        {data&&data.map((e)=>{
          return <PopularCard key={e.restaurant_id}
          id={e.restaurant_id}
          image={e.images[0].url}
          name={e.restaurant_name}
          locality={e.location ? e.location.location_locality : ''}
          state={e.location ? e.location.state_name : ''}
        />})}
        </Flex>

    </Flex>
  )
}

export default Popular