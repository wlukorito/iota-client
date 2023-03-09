import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { type } from "os";
import { CalendarIcon } from "@chakra-ui/icons";

type LogoProps = {
  w: string;
};

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Box {...props}>
      <Text
        fontSize="lg"
        fontWeight="bold"
        color={useColorModeValue("red", "white")}
        px={4}
      >
        <CalendarIcon />
      </Text>
    </Box>
  );
};

export default Logo;
