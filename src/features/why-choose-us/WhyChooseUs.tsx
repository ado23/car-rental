import { Text, Box, Image, Flex, Heading, Container } from "@chakra-ui/react";

import thinking from "assets/img/thinking-face-bro.png";

const WhyChooseUs = () => (
  <Container maxW="7xl">
    <Flex
      direction={{ base: "column", sm: "column", md: "row" }}
      justifyContent="space-between"
      gap={5}
    >
      <Box flex={1} background="whitesmoke" borderRadius="lg">
        <Image alt="Cover image" objectFit="contain" src={thinking} />
      </Box>

      <Flex direction="column" flex={1}>
        <Heading size="2xl" mb={2}>
          Why choose us ?
        </Heading>

        <Text>
          Discover the best deals you will ever find with our unbeatable offers. We are dedicated to
          providing you with the best value for your money, so you can enjoy top-quality services
          and products without breaking the bank. Our deals are designed to give you the ultimate
          renting experience, so do not miss out on your chance to save big.
        </Text>

        <Flex
          as="section"
          alignItems="start"
          justifyContent="between"
          flexDirection={{ base: "column", md: "row" }}
          my={{ base: "1.5rem", md: "2.5rem" }}
          pb={8}
        >
          <Box
            w={{ base: "100%", md: 1 / 3 }}
            px={{ md: "0.5rem" }}
            mb={{ base: "6", md: "0" }}
            flex={1}
          >
            <Text textAlign="left" fontWeight="700">
              NO EXTRA COST ON ARRIVAL
            </Text>

            <Text textAlign="left" mt={3} mb={1}>
              Enjoy peace of mind with our no hidden charges policy. We believe in transparent and
              honest pricing.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  </Container>
);

export default WhyChooseUs;
