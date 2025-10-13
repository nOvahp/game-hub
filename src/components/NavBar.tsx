import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" objectFit="cover" alt="Quantonix Logo" />
      <Text>nnnn </Text>
    </HStack>
  );
};

export default Navbar;
