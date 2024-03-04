import React, { useEffect, useRef, useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TasteCard from "./TasteCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function TasteSlider(props) {
  const { data } = props; // Destructure data directly from props
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
  }, [data]); // Run effect whenever data changes

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
            image={e.images[0].url}
            name={e.restaurant_name}
            locality={e.location ? e.location.location_locality : ''}
            state={e.location ? e.location.state_name : ''}
          />
        }
        )}
      </Slider>
    </Flex>
  );
}

export default TasteSlider;
