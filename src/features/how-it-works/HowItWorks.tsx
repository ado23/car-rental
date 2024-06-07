import { Container, Box, Heading, Text, Flex, useColorModeValue } from "@chakra-ui/react";

import { Icon } from "components/index";

const HowItWorks = () => (
  <Box py={10}>
    <Container maxW="7xl">
      <Box marginX="auto" py={{ base: "3rem", md: "4rem" }}>
        <Heading fontSize="5xl" textAlign="center" mb={{ base: "5", md: "2" }} pb={4}>
          How it works ?
        </Heading>

        <Flex
          as="section"
          alignItems="start"
          justifyContent="between"
          flexDirection={{ base: "column", md: "row" }}
          my={{ base: "1.5rem", md: "2.5rem" }}
          pb={8}
          gap={10}
        >
          <Box
            w={{ base: "100%", md: 1 / 3 }}
            p={{ md: "1rem" }}
            mb={{ base: "6", md: "0" }}
            border="1px solid"
            borderRadius="lg"
            alignSelf="stretch"
            borderColor={useColorModeValue("gray.100", "gray.700")}
            boxShadow={useColorModeValue(
              "0 4px 6px rgba(160, 174, 192, 0.6)",
              "0 4px 6px rgba(9, 17, 28, 0.9)"
            )}
          >
            <Flex justify="center">
              <Box
                position="relative"
                borderRadius="lg"
                p={5}
                background={useColorModeValue("white", "gray.800")}
              >
                <Icon
                  name="home-pin"
                  width="3rem"
                  height="3rem"
                  color={useColorModeValue("black", "white")}
                />
              </Box>
            </Flex>
            <Text textAlign="left" fontWeight="700" mt={3} mb={1}>
              Pick-Up and Return Location
            </Text>
            <Text
              color={useColorModeValue("gray.700", "gray.400")}
              fontSize="0.875rem"
              fontWeight="300"
              textAlign="left"
              mt={3}
              mb={1}
            >
              At CarLine we believe that traveling should be as easy and convenient as possible. You
              choose your pick up and return location, any day, any hour of day.
            </Text>
          </Box>

          <Box
            w={{ base: "100%", md: 1 / 3 }}
            p={{ md: "1rem" }}
            mb={{ base: "6", md: "0" }}
            border="1px solid"
            borderRadius="lg"
            alignSelf="stretch"
            borderColor={useColorModeValue("gray.100", "gray.700")}
            boxShadow={useColorModeValue(
              "0 4px 6px rgba(160, 174, 192, 0.6)",
              "0 4px 6px rgba(9, 17, 28, 0.9)"
            )}
          >
            <Flex justify="center">
              <Box
                position="relative"
                borderRadius="lg"
                p={5}
                background={useColorModeValue("white", "gray.800")}
              >
                <Icon
                  name="calendar-with-time"
                  width="3rem"
                  height="3rem"
                  color={useColorModeValue("black", "white")}
                />
              </Box>
            </Flex>

            <Text textAlign="left" fontWeight="700" mt={3} mb={1}>
              Pick-Up and Pick-Off Date
            </Text>
            <Text
              color={useColorModeValue("gray.700", "gray.400")}
              fontSize="0.875rem"
              fontWeight="300"
              textAlign="left"
              mt={3}
              mb={1}
            >
              Choose your pick-up and pick-off date. We will take care of the rest.
            </Text>
          </Box>

          <Box
            w={{ base: "100%", md: 1 / 3 }}
            p={{ md: "1rem" }}
            mb={{ base: "6", md: "0" }}
            border="1px solid"
            borderRadius="lg"
            alignSelf="stretch"
            borderColor={useColorModeValue("gray.100", "gray.700")}
            boxShadow={useColorModeValue(
              "0 4px 6px rgba(160, 174, 192, 0.6)",
              "0 4px 6px rgba(9, 17, 28, 0.9)"
            )}
          >
            <Flex justify="center">
              <Box
                position="relative"
                borderRadius="lg"
                p={5}
                background={useColorModeValue("white", "gray.800")}
              >
                <Icon
                  name="car"
                  width="3rem"
                  height="3rem"
                  color={useColorModeValue("black", "white")}
                />
              </Box>
            </Flex>

            <Text textAlign="left" fontWeight="700" mt={3} mb={1}>
              Book Your Car
            </Text>
            <Text
              color={useColorModeValue("gray.700", "gray.400")}
              fontSize="0.875rem"
              fontWeight="300"
              textAlign="left"
              mt={3}
              mb={1}
            >
              Securely book your car and enjoy the best time of your life. Start your journey now.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  </Box>
);

export default HowItWorks;
