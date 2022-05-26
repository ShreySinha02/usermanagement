// import React, { useRef, useState } from "react";
// import { HStack, Input, Button } from "@chakra-ui/react";
// function Horozntalstack() {
//   const [input1, setInput1] = useState("");
//   const [input2, setInput2] = useState("");
//   const [input3, setInput3] = useState("");
//   const name = useRef();
//   const genre = useRef();
//   const rating = useRef();
//   return (
//     <HStack spacing="24px">
//       <Input
//         ref={name}
//         value={input1}
//         variant="filled"
//         placeholder="Enter Name"
//         size="md"
//         ml="5px"
//         onChange={() => {
//           setInput1(name.current.value);
//         }}
//       />
//       <Input
//         ref={genre}
//         value={input2}
//         variant="filled"
//         placeholder="Enter genre"
//         size="md"
//         onChange={() => {
//           setInput2(genre.current.value);
//         }}
//       />
//       <Input
//         ref={rating}
//         value={input3}
//         variant="filled"
//         placeholder="Enter rating"
//         size="md"
//         onChange={() => {
//           setInput3(rating.current.value);
//         }}
//       />
//       <Button
//         onClick={() => {
//           console.log("name:", input1 + " genre:", input2 + " rating:", input3);
//         }}
//         bgColor=" #170739"
//         color="white"
//       >
//         Add
//       </Button>
//     </HStack>
//   );
// }

// export default Horozntalstack;
