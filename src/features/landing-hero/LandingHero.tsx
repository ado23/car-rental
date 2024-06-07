import { Box, Button, Flex, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import car from "assets/img/arteon.png";
import patternTransparent from "assets/img/pattern-transparent.png";

const Landing = () => (
  <Flex
    justify={{ base: "center", sm: "center", md: "center", lg: "end" }}
    height="100vh"
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    backgroundPosition="center center"
    backgroundImage={patternTransparent}
    _after={{
      content: '""',
      objectFit: "cover",
      position: "absolute",
      top: -5,
      right: 0,
      bottom: 0,
      left: -750,
      zIndex: 1,
      backgroundImage: car,
      backgroundRepeat: "no-repeat"
    }}
  >
    <Flex
      px="10px"
      align="center"
      justify={{ base: "center", sm: "center", md: "center", lg: "end" }}
    >
      <Stack
        w="full"
        p="10px"
        maxW="2xl"
        zIndex={2}
        spacing={5}
        borderRadius="10px"
        backdropFilter="blur(10px)"
        background={useColorModeValue("whiteAlpha.700", "blackAlpha.700")}
      >
        <Heading fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}>
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
          <Text fontSize={{ base: "md", lg: "lg" }} borderRadius="5px" p={2}>
            Choose from a wide range of cars that fit your style and budget. Experience the freedom
            of open roads with our reliable and efficient car rental service.
          </Text>
        </Box>
        <Stack direction={{ base: "column", md: "row" }} spacing={4}>
          <Button colorScheme="blue">Explore now</Button>
          <Button colorScheme="teal">See all cars</Button>
        </Stack>
      </Stack>
    </Flex>
  </Flex>
);

export default Landing;
