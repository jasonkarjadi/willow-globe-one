import { VStack } from "@chakra-ui/react";
import BigChungus from "./BigChungus";

const StackButtons = ({ children }) => {
  return (
    <VStack spacing="mainhalf" flex={1}>
      {children.map((text, index) => (
        <BigChungus key={index}>{text}</BigChungus>
      ))}
    </VStack>
  );
};
export default StackButtons;
