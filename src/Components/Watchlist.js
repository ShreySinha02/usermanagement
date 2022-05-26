import React, { useEffect } from "react";
import { Flex, Box, Text, Center,Button,Spacer } from "@chakra-ui/react";
import "./Watchlist.css";
import Tabl from "./Tabl";
import { useRef, useState } from "react";
import { HStack, Input } from "@chakra-ui/react";
// import Horozntalstack from "./Horozntalstack";
function Watchlist() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const[object,setObjects]=useState([]);

 
  const name = useRef();
  const genre = useRef();
  const rating = useRef();
  const handleClick=()=>
  {
    const obj={
      movie:input1,
      genre:input2,
      rating:input3
    }
    setInput1("")
    setInput2("")
    setInput3("")
    setObjects((oldObject)=>{
      return [...oldObject,obj]
    })
  }
  useEffect(()=>{
    localStorage.setItem('my-list',JSON.stringify(object))
  },[object])
  return (
    <div className="watchlist">
      <Flex>
        <Box
          className="system"
          h="8vh"
          bg="#071C44"
          w="50vh"
          color="white"
          borderRadius="20px"
          mb="15px"
        >
          <Center>
            <Text>User Management System</Text>
          </Center>
        </Box>
        <Spacer/>
        <Button className="logout" bg="red"  color="white" size="md" marginTop="10px">Log out</Button>
      </Flex>
      <div className="center">
      <Text>hey Shrey</Text>
      <Box
          h="5vh"
          bg="#086FB9"
          w="40vh"
          color="white"
          borderRadius="20px"
          mb="15px"
        >
          <Center>
            <Text>Your Watchlist</Text>
          </Center>
        </Box>
        <Tabl objects={object}/>
        <Box
        className="watch"
          h="5vh"
          bg="#024242"
          w="50vh"
          color="white"
          borderRadius="20px"
          mb="15px"
        >
          <Center>
            <Text>Add Movie to your Watchlist</Text>
          </Center>
        </Box>
        <HStack spacing="24px">
      <Input
        ref={name}
        value={input1}
        variant="filled"
        placeholder="Enter Name"
        size="md"
        ml="5px"
        onChange={() => {
          setInput1(name.current.value);
        }}
      />
      <Input
        ref={genre}
        value={input2}
        variant="filled"
        placeholder="Enter genre"
        size="md"
        onChange={() => {
          setInput2(genre.current.value);
        }}
      />
      <Input
        ref={rating}
        value={input3}
        variant="filled"
        placeholder="Enter rating"
        size="md"
        onChange={() => {
          setInput3(rating.current.value);
        }}
      />
      <Button
        onClick={handleClick}
        bgColor=" #170739"
        color="white"
      >
        Add
      </Button>
    </HStack>
    </div>
    </div>
  );
}

export default Watchlist;
