import { Flex } from "@chakra-ui/react";
import BookPage from "./BookPage";

const Layout = ({ leftContent, rightContent }) => {
  return (
    <Flex mx="70px" h="100vh">
      <BookPage>{leftContent}</BookPage>
      <BookPage>{rightContent}</BookPage>
    </Flex>
  );
};

export default Layout;
