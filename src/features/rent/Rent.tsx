import { Box, useColorModeValue, Container, Image } from "@chakra-ui/react";

import pattern from "assets/img/patternImage.png";
import RentForm from "features/rent/form/RentForm";

const Rent = () => (
  <Container as="section" id="rent-vehicle-box" maxW="7xl" pb={{ base: "4rem", md: "10rem" }}>
    <Box
      pos="relative"
      rounded="lg"
      p={{ base: 4, sm: 8 }}
      boxShadow={useColorModeValue(
        "0 4px 6px rgba(160, 174, 192, 0.6)",
        "0 4px 6px rgba(9, 17, 28, 0.9)"
      )}
    >
      <Image
        src={pattern}
        alt="pattern"
        width="100%"
        height="100%"
        objectFit="fill"
        style={{ position: "absolute", inset: "0", pointerEvents: "none" }}
      />
      <RentForm />
    </Box>
  </Container>
);

export default Rent;
