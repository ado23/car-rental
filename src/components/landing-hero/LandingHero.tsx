import { Box, Flex, Image } from "@chakra-ui/react";

import arteonGold from "assets/img/arteon-gold.png";
import heroCity from "assets/img/city-hero.png";
import HeroContent from "components/landing-hero/HeroContent";

const LandingHero = () => (
  <section id="hero-section">
    <Box px="1rem">
      <Image
        top={0}
        right={0}
        zIndex={-1}
        src={heroCity}
        position="absolute"
        alt="hero-city-image"
      />

      <Flex
        width="100%"
        position="relative"
        height="90vh"
        flexDirection={{
          base: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row"
        }}
        justify={{ base: "center", sm: "center", md: "center", lg: "start" }}
      >
        <Flex
          flex={1}
          p="1rem"
          align="center"
          justify={{ base: "center", sm: "center", md: "center", lg: "end" }}
        >
          <HeroContent />
        </Flex>

        <Flex flex={1} justify="center">
          <Image src={arteonGold} mt="1rem" width="100%" zIndex={1} objectFit="contain" />
        </Flex>
      </Flex>
    </Box>
  </section>
);

export default LandingHero;
