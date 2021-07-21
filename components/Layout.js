import { Flex } from "@chakra-ui/react";
import Globe from "./Globe";

const Layout = ({ children }) => {
  return (
    <Flex>
      <Globe />
      {children}
    </Flex>
  );
};

export default Layout;
