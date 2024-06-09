import { Box, Button, FormLabel, Input, Flex, Heading } from "@chakra-ui/react";

import { Icon, Select } from "components/index";
import useGetData from "features/rent/hooks/useGetData";

const RentForm = () => {
  const { locations, vehicleTypes, vehicles } = useGetData();

  return (
    <Flex
      gap={5}
      zIndex={1}
      direction="column"
      textAlign={{ base: "center", md: "left" }}
      px={{ base: "2rem", sm: "2rem", md: "1rem" }}
    >
      <Heading fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" mb={5}>
        Rent a vehicle with ease
      </Heading>

      <Flex
        gap={10}
        align="end"
        justifyContent="space-between"
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
      >
        <Box width="100%">
          <Select
            options={vehicleTypes}
            placeholder="e.g. (Sedan)"
            label="Vehicle Type"
            icon="car"
            isClearable
            isSearchable
          />
        </Box>

        <Box width="100%">
          <Select
            options={vehicles}
            placeholder="e.g. (Arteon)"
            label="Vehicle"
            icon="car"
            isClearable
            isSearchable
          />
        </Box>

        <Box width="100%">
          <Select
            options={locations}
            placeholder="e.g. (Madrid)"
            isClearable
            isSearchable
            label="Pick-Up Location"
            icon="home-pin"
          />
        </Box>

        <Box width="100%">
          <Select
            options={locations}
            placeholder="e.g. (Valencia)"
            isClearable
            isSearchable
            label="Drop-Off Location"
            icon="drop-off-pin"
          />
        </Box>
      </Flex>

      <Flex
        gap={10}
        align="end"
        justifyContent="center"
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
      >
        <Box width="100%">
          <Flex direction="row" gap={3}>
            <Icon name="calendar" />
            <FormLabel>Select Pick-up Date</FormLabel>
          </Flex>

          <Input type="date" placeholder="Select option" />
        </Box>

        <Box width="100%">
          <Flex direction="row" gap={3}>
            <Icon name="calendar" />
            <FormLabel>Select Drop-off Date</FormLabel>
          </Flex>

          <Input type="date" placeholder="Select option" />
        </Box>
      </Flex>

      <Flex justify="center">
        <Button colorScheme="dark" w="md">
          Rent now
        </Button>
      </Flex>
    </Flex>
  );
};

export default RentForm;