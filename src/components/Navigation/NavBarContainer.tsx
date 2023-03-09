import { Flex, useColorModeValue } from "@chakra-ui/react";

type NavBarContainerProps = {
  children: React.ReactNode;
};

const NavBarContainer: React.FC<NavBarContainerProps> = ({
  children,
  ...extraStyles
}) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={useColorModeValue("gray.100", "gray.900")}
      {...extraStyles}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
