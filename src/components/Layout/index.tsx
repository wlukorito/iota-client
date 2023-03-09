import { Box, Center } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";
import NavBar from "../Navigation/NavBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Center>{children}</Center>
    </Box>
  );
};

export default Layout;
