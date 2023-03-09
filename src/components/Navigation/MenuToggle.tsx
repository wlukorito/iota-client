import React from "react";
import { Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type MenuToggleProps = {
  toggle: () => void;
  isOpen: boolean;
};

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <HamburgerIcon /> : <HamburgerIcon />}
    </Box>
  );
};

export default MenuToggle;
