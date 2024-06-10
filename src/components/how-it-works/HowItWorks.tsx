import { Container, Heading, Flex } from "@chakra-ui/react";

import bookCar from "assets/img/how-it-works/book-car.svg";
import location from "assets/img/how-it-works/driver-location.svg";
import calendar from "assets/img/how-it-works/online-calendar.svg";
import Card from "components/how-it-works/components/Card";

const HowItWorks = () => (
  <Container as="section" id="how-it-works" maxW="7xl" pb={{ base: "4rem", md: "10rem" }}>
    <Heading
      pb={4}
      textAlign="center"
      mb={{ base: "5", md: "2" }}
      fontSize={{ base: "4xl", sm: "4xl", md: "4xl", lg: "5xl" }}
    >
      How it works ?
    </Heading>

    <Flex
      gap={10}
      alignItems="start"
      justifyContent="between"
      my={{ base: "1rem", md: "2.5rem" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Card
        image={location}
        step="STEP 1"
        title="Pick-Up and Return Location"
        description="At CarLine we believe that traveling should be as easy and convenient as possible. You choose your pick up and return location, any day, any hour of day."
      />

      <Card
        image={calendar}
        step="STEP 2"
        title="Pick-Up and Pick-Off Date"
        description="Choose your pick-up and pick-off date. We will take care of the rest."
      />

      <Card
        image={bookCar}
        step="STEP 3"
        title="Book Your Car"
        description="Securely book your car and enjoy the best time of your life. Start your journey now."
      />
    </Flex>
  </Container>
);

export default HowItWorks;
