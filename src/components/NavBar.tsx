import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="2%">
      <Image src={logo} boxSize="50px" objectFit="cover" alt="Quantonix Logo" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
