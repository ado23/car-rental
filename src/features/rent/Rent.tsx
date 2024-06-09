import { Box, useColorModeValue, Container, Image } from "@chakra-ui/react";

import pattern from "assets/img/patternImage.png";
import RentForm from "features/rent/form/RentForm";

const Rent = () => (
  <section id="rent-vehicle-box">
    <Container maxW="8xl">
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
  </section>
);

export default Rent;
