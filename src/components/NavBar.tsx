import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({onSearch}: Props) => {
  return (
    <HStack padding="1%">
      <Image src={logo} boxSize="50px" objectFit="cover" alt="Quantonix Logo" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
