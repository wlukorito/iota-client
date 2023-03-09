import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

type MenuLinksProps = {
  isOpen: boolean;
};

const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/items">Items</MenuItem>
        <MenuItem to="/supplies">Supplies</MenuItem>
        <MenuItem to="/events">Events</MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
