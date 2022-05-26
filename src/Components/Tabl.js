import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { AiTwotoneDelete } from 'react-icons/ai';
function Tabl({objects}) {


  
  
  return (
    <div>
      <TableContainer>
        <Table size="lg">
          <Thead bg="#1D8F9E">
            <Tr>
              <Th color="white">Id</Th>
              <Th color="white">Movie</Th>
              <Th color="white">genre</Th>
              <Th color="white">Rating</Th>
              <Th color="white">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>SkyFall</Td>
              <Td>Action</Td>
              <Td>7.8</Td>
              <Td color="red" ><AiTwotoneDelete/></Td>
            </Tr>
           {
             objects.map((ob)=>{
               return(
                <Tr>
                <Td>1</Td>
                <Td>{ob.movie}</Td>
                <Td>{ob.genre}</Td>
                <Td>{ob.rating}</Td>
                <Td color="red"><AiTwotoneDelete/></Td>
              </Tr>
               )
             })
           }
            
            
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tabl;
