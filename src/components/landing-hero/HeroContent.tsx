import { Box, Button, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const Actions = () => (
  <Stack direction={{ base: "column", sm: "column", md: "row", lg: "row" }} spacing={4}>
    <Button colorScheme="dark">Explore now</Button>
    <Button colorScheme="blue" variant="outline">
      See all cars
    </Button>
  </Stack>
);

const HeroContent = () => (
  <Flex
    p="1rem"
    gap={5}
    maxW="5xl"
    borderRadius="lg"
    flexDirection="column"
    backdropFilter="blur(10px)"
    background={useColorModeValue("whiteAlpha.300", "blackAlpha.300")}
  >
    <Heading fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "6xl" }}>
      <Text>
        <Text as="b" color="blue.500">
          Discover {""}
        </Text>
        the world on wheels with our
        <Text as="b" color="blue.500">
          {" "}
          car rental {""}
        </Text>
        service.
      </Text>
    </Heading>
    <Box>
      <Text fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}>
        Welcome to CarLine, the premier car rental application for all travel enthusiasts. Our
        platform offers a wide range of vehicles to choose from that fit your style and budget.
        Experience the freedom of open roads with our reliable and efficient car rental service.
      </Text>
    </Box>

    <Actions />
  </Flex>
);

export default HeroContent;
