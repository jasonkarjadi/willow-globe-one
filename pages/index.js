import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { languages } from "../data";

export default function Home({ data }) {
  const [lang, setLang] = useState("en");
  return (
    <Box
      h="100vh"
      w="890px"
      mx="auto"
      bg="gray"
      p="25px"
      border="5px solid black"
    >
      <Flex p="main" border="5px solid black" h="full" flexDirection="column">
        <Heading textAlign="center" mb="main">
          Alvacorre
          <br />
          My Language Encyclopedia
        </Heading>
        <NextLink href={`/${lang}`}>
          <Link display="inline-block" flex={1} border="5px solid black">
            Go to content
          </Link>
        </NextLink>
        <Text textAlign="right" mt="mainhalf">
          by Jason Karjadi
        </Text>
      </Flex>
    </Box>
  );
}
