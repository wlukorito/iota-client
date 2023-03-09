import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";
import ChackraNextLink from "../ChakraNextLink";

type MenuItemProps = {
  to?: string;
  children: React.ReactNode;
};

const MenuItem: React.FC<MenuItemProps> = ({ children, to = "/", ...rest }) => {
  return (
    <ChackraNextLink href={to} _hover={{ color: "blue.500" }}>
      <Text
        display="block"
        {...rest}
        color={useColorModeValue("black", "white")}
        px={4}
      >
        {children}
      </Text>
    </ChackraNextLink>
  );
};

export default MenuItem;
