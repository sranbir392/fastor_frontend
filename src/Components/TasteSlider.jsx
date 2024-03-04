import React, { useEffect, useRef, useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TasteCard from "./TasteCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function TasteSlider() {
  
  const data=[{
    restaurant_id:123,
    url:"https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title:"Nik Baker's",
    dish:"Cakes, pastry,Pastas",
    desc:"Connaught Place, New Delhi",
    color:"#dba58a",

},
{
  restaurant_id:123,
  url:"https://media.istockphoto.com/id/1437118778/photo/indian-food-flatlay.webp?b=1&s=170667a&w=0&k=20&c=zsMfr1y9h8YX5R1kwywKk5nvcUIYR5Sk1PUpFrKlgN4=",
  title:"Rahul Store",
  dish:"Cakes, pastry,Pastas",
  desc:"Connaught Place, New Delhi",
  color:"#f5f5f5",

},{
  restaurant_id:123,
  url:"https://media.istockphoto.com/id/1005390222/photo/chicken-tikka-masala-spicy-curry-meat-food-with-rice-and-naan-bread.webp?b=1&s=170667a&w=0&k=20&c=h83PGbDmQm5lK9NwKsnpp545j6oaLOMKENJ-qW4wnHk=",
  title:"Nik Baker's",
  dish:"Cakes, pastry,Pastas",
  desc:"Connaught Place, New Delhi",
  color:"#ddcfc6",

},
{
  restaurant_id:123,
  url:"https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  title:"Nik Baker's",
  dish:"Cakes, pastry,Pastas",
  desc:"Connaught Place, New Delhi",
  color:"#dba58a",

},
{
restaurant_id:123,
url:"https://media.istockphoto.com/id/1437118778/photo/indian-food-flatlay.webp?b=1&s=170667a&w=0&k=20&c=zsMfr1y9h8YX5R1kwywKk5nvcUIYR5Sk1PUpFrKlgN4=",
title:"Rahul Store",
dish:"Cakes, pastry,Pastas",
desc:"Connaught Place, New Delhi",
color:"#f5f5f5",

},{
restaurant_id:123,
url:"https://media.istockphoto.com/id/1005390222/photo/chicken-tikka-masala-spicy-curry-meat-food-with-rice-and-naan-bread.webp?b=1&s=170667a&w=0&k=20&c=h83PGbDmQm5lK9NwKsnpp545j6oaLOMKENJ-qW4wnHk=",
title:"Nik Baker's",
dish:"Cakes, pastry,Pastas",
desc:"Connaught Place, New Delhi",
color:"#ddcfc6",

},
{
  restaurant_id:123,
  url:"https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  title:"Nik Baker's",
  dish:"Cakes, pastry,Pastas",
  desc:"Connaught Place, New Delhi",
  color:"#dba58a",

},
{
restaurant_id:123,
url:"https://media.istockphoto.com/id/1437118778/photo/indian-food-flatlay.webp?b=1&s=170667a&w=0&k=20&c=zsMfr1y9h8YX5R1kwywKk5nvcUIYR5Sk1PUpFrKlgN4=",
title:"Rahul Store",
dish:"Cakes, pastry,Pastas",
desc:"Connaught Place, New Delhi",
color:"#f5f5f5",

},{
restaurant_id:123,
url:"https://media.istockphoto.com/id/1005390222/photo/chicken-tikka-masala-spicy-curry-meat-food-with-rice-and-naan-bread.webp?b=1&s=170667a&w=0&k=20&c=h83PGbDmQm5lK9NwKsnpp545j6oaLOMKENJ-qW4wnHk=",
title:"Nik Baker's",
dish:"Cakes, pastry,Pastas",
desc:"Connaught Place, New Delhi",
color:"#ddcfc6",

},
]
  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false
  });

  useEffect(() => {
    
    if (data && data.length > 0) {
      setSliderSettings({
        ...sliderSettings,
        dots: false,
       
      });
    }
  }, [data]); 

  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Flex direction="column" alignItems="center" w="100%" pl={3}>
      <Flex alignItems="baseline" justifyContent="space-between" w="100%" p={2}>
        <Text w="30%" fontSize="18px" fontWeight="600" letterSpacing="1px">Your Taste</Text>
        <Flex mt={4} w="70%" justifyContent="end" gap={3}>
          <Button fontSize="16px" h="30px" w="30px" onClick={previous}>
            <ChevronLeftIcon/>
          </Button>
          <Button h="30px" fontSize="16px" w="30px" onClick={next}>
            <ChevronRightIcon/>
          </Button>
        </Flex>
      </Flex>
      <Slider
        ref={sliderRef}
        {...sliderSettings}
        style={{maxWidth: "100%", paddingLeft: "8px", marginTop: "8px"}}
      >
        {data && data.map((e) => {
         return <TasteCard
            key={e.restaurant_id}
            id={e.restaurant_id}
            image={e.url}
            name={e.title}
            locality={e.desc}
            state={e.location ? e.location.state_name : ''}
          />
        }
        )}
      </Slider>
    </Flex>
  );
}

export default TasteSlider;
