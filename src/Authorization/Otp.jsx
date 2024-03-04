import React, { useState, useRef } from 'react';
import { Input, Flex, Button, useColorModeValue, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OtpInput = (props) => {
  const {number}={...props}
  const color = useColorModeValue('white', 'gray.800')
  const toast =useToast()
  const navigate=useNavigate()
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [userData,setUserData]=useState(null);
  const handleChange = (index, value) => {
    if (isNaN(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Move focus to the next input
    if (value !== '' && index < refs.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    // Move focus to the previous input on backspace
    if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
      refs[index - 1].current.focus();
    }
  };
  const login=async()=>{
    let data={
      phone:+number,
      otp:otp.join(""),
      dial_code:"+91"
    }
    try{
      const res= await axios.post("https://staging.fastor.in/v1/pwa/user/login",data)
      if(res.status_code==200){
        toast({
          title: 'Login Successful',
          description: "User Verified",
          status: 'success', // Use 'error' status for failed toast
          duration: 2000,
          isClosable: true,
        });
        
      }
      // console.log(res.data.data.token)
      localStorage.setItem("token",JSON.stringify(res.data.data.token))
      localStorage.setItem("userData",JSON.stringify(res.data.data))
      setUserData(res.data.data);
      navigate("/home")
    }catch(err){
      console.log(err)
    }
  }
const handleClick=()=>{
  if(otp.length<6){
    toast({
      title: 'Incorrect Number',
      description: "Check Your Number",
      status: 'error', // Use 'error' status for failed toast
      duration: 2000,
      isClosable: true,
    });
  }else{
    login()
  }
}
  return (
    <Flex flexDir={"column"} gap={4} color={"black"}>
        <Flex justify="center" mt={4} >
        {otp.map((value, index) => (
            <Input
            key={index}
            ref={refs[index]}
            type="tel"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            maxLength={1}
            textAlign="center"
            width="50px"
            height="40px"
            marginX={1}
            borderRadius="md"
            borderColor="gray.300"
            focusBorderColor="blue.500"
            />
        ))}

        </Flex>
        <Button onClick={handleClick}  p={3} fontSize={"14px "} letterSpacing={"2px"} backgroundColor={"#FF6D6A"} color={"white"} >Verify Otp</Button>
    </Flex>
  );
};

export default OtpInput;