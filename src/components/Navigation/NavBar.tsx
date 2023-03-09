import React from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";
import ToggleLayout from "./ToggleLayout";

const NavBar: React.FC = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <MenuToggle toggle={toggle} isOpen />
      <Logo w="400px" />
      <MenuLinks isOpen={isOpen} />
      <ToggleLayout />
    </NavBarContainer>
  );
};

export default NavBar;
