import { Button } from "@chakra-ui/react";

const BigChungus = ({ children }) => {
  return (
    <Button isFullWidth borderRadius="3xl" flex={1}>
      {children}
    </Button>
  );
};

export default BigChungus;
