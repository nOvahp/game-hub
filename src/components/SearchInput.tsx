import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup> 
    <InputLeftElement children={<BsSearch color="gray.500" />} />   
        <Input borderRadius={20} placeholder="Search games..." variant="filled" />
  1 </InputGroup>
  );
};

export default SearchInput;
