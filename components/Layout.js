import { Box } from "@chakra-ui/react";
import Globe from "./Globe";

const Layout = ({ children }) => {
  return (
    <>
      <Globe />
      <Box pos="absolute" top="0" left="0" h="100vh">
        {children}
      </Box>
    </>
  );
};

export default Layout;
