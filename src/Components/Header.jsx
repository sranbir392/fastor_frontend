'use client'

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'



export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const navigate=useNavigate()
  const handleClick=()=>{
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} w={"100%"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box h={"40px"} w={"100px"}><Image h={"100%"} w={"100%"} src='https://www.fastor.ai/_next/static/media/Logo.5a0cac78.png'/></Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'data:image/jpeg;base64,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'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <MenuItem onClick={handleClick}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}