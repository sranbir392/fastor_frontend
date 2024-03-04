import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import TasteSlider from '../Components/TasteSlider'
import SlidingWindow from '../Components/SlidingWindow'
import Popular from '../Components/Popular'
import axios from 'axios'

const Home = () => {
    const token =JSON.parse(localStorage.getItem("token"));
    const [data,setData]=useState([]);
    const getData=async()=>{
        try{
            const res=await axios.get("https://staging.fastor.in/v1/m/restaurant",{
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            })
            setData(res.data)
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <Box>
        <Header />
      <Banner />
      <TasteSlider data={data}/>
      <SlidingWindow />
      <Popular data={data}/>
    </Box>
  )
}

export default Home