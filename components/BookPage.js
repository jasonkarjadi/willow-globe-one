import { Flex } from "@chakra-ui/react";

const BookPage = ({ children }) => {
  return (
    <Flex
      p="main"
      h="inherit"
      bg="page"
      flex={1}
      outline="5px black solid"
      flexDirection="column"
    >
      {children}
    </Flex>
  );
};

export default BookPage;
