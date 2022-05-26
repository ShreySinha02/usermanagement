import { VStack, Box, Input,Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

import './Login.css'

function Login() 
{
  const navigate = useNavigate();

  return (
    <div className="App">
    <VStack p="10px">
      <Box
        h="20%"
        bg="#071C44"
        w="200%"
        color="white"
        borderRadius="20px"
        mb="15px"
      >
        User Management System
      </Box>
      <Input placeholder="Username" size="md" bg="#E5E5E5" mt="10px"/>
      <Input placeholder="Password" size="md"  background="#E5E5E5"/>
      <Button bg="#071C44"  color="white" size="md" marginTop="10px" onClick={()=>navigate("/watchlist")}>
        Login
      </Button>
    </VStack>
    </div>
  );
}

export default Login
