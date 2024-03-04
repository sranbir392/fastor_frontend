import React from "react";
import {Image, Flex, Box } from "@chakra-ui/react";
import Slider from "react-slick";
function SlidingWindow() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows:false,
  };
  return (
    <Box  width={"100%"} alignSelf={"center"} borderRadius={"20px"} overflow={"hidden"}  p={5}>
      <Slider {...settings}>
       <Box w={"100%"} borderRadius={"20px"} overflow={"hidden"}> <Image w={"100%"}  h={"150px"} src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Image 1" /></Box>
       <Box w={"100%"} borderRadius={"20px"} overflow={"hidden"}> <Image w={"100%"} h={"150px"} src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Image 2" /></Box>
       <Box w={"100%"} borderRadius={"20px"} overflow={"hidden"}> <Image w={"100%"} h={"150px"} src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Image 3" /></Box>
       <Box  w={"100%"} borderRadius={"20px"} overflow={"hidden"}> <Image w={"100%"} h={"150px"} src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Image 4" /></Box>
       <Box w={"100%"} borderRadius={"20px"} overflow={"hidden"}> <Image w={"100%"} h={"150px"} src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Image 5" /></Box>
       <Box  w={"100%"} borderRadius={"20px"} overflow={"hidden"}> <Image w={"100%"} h={"150px"} src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Image 6" /></Box>
      </Slider>
    </Box>
  );
}

export default SlidingWindow;
