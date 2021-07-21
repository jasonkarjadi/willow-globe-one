import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function English() {
  return (
    <Flex w="50vw" bg="gray.800" pos="absolute" top="0" right="0">
      <Box flex={1} borderX="black 2px solid">
        <Heading
          p={4}
          mx={4}
          borderBottom="white 1px solid"
          pos="sticky"
          top="0"
          bg="gray.800"
        >
          English
        </Heading>
        <Box h={40} bg="blue.900" m={4}></Box>
        <Text m={4}>
          Curabitur hendrerit urna quis mattis aliquet. Sed consequat mattis
          diam, eu elementum diam euismod nec. Proin ac faucibus risus, eu
          finibus urna. Nam vel faucibus sapien. Ut vehicula, neque nec molestie
          tincidunt, nisl arcu cursus urna, eget finibus neque leo eu neque.
          Nunc congue ligula ut lorem volutpat, id scelerisque nisi euismod.
          Etiam venenatis a metus eu congue.
        </Text>
        <Flex h="full" mx={2} h="2xl">
          <Box bg="blue.900" flex={1 / 4} mx={2}></Box>
          <Box bg="blue.900" flex={3 / 4} mx={2}></Box>
        </Flex>
        <Text m={4}>
          Etiam pellentesque
          <br />
          Sed porta
          <br />
          Fusce id
          <br />
          Aenean
          <br />
          Felis
        </Text>
        <SimpleGrid columns={8} spacing={2} m={4}>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
        </SimpleGrid>
      </Box>
      <Box flex={1} borderX="black 2px solid">
        <Heading
          p={4}
          mx={4}
          borderBottom="white 1px solid"
          pos="sticky"
          top="0"
          bg="gray.800"
        >
          Indonesian
        </Heading>
        <Box h={40} bg="blue.900" m={4}></Box>
        <Text m={4}>
          Nunc at tortor sem. Mauris at lacus fringilla, convallis dui in,
          ultrices ex. Curabitur blandit ligula in arcu auctor eleifend at et
          nulla. Sed nec eleifend orci. Donec hendrerit urna et nunc consectetur
          suscipit. In tristique ante eget lectus suscipit, et finibus augue
          tempor. Nullam tortor leo, congue vitae risus vulputate, commodo
          viverra ex. Praesent id ullamcorper purus.
        </Text>
        <Flex h="full" mx={2} h="2xl">
          <Box bg="blue.900" flex={1 / 4} mx={2}></Box>
          <Box bg="blue.900" flex={3 / 4} mx={2}></Box>
        </Flex>
        <Text m={4}>
          Proin eleifend
          <br />
          Vestibulum malesuada
          <br />
          Ut id
          <br />
          Aliquam erat
          <br />
          Morbi ac
        </Text>
        <SimpleGrid columns={8} spacing={2} m={4}>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
          <Box h={12} bg="blue.900"></Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
