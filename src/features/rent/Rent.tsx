import {
  Box,
  useColorModeValue,
  Container,
  Button,
  Select,
  FormLabel,
  Input,
  Flex,
  Image,
  Heading
} from "@chakra-ui/react";

import pattern from "assets/img/patternImage.png";
import { Icon } from "components/index";

const Rent = () => (
  <Box py={10}>
    <Container maxW="7xl">
      <Box
        pos="relative"
        boxShadow={useColorModeValue(
          "0 4px 6px rgba(160, 174, 192, 0.6)",
          "0 4px 6px rgba(9, 17, 28, 0.9)"
        )}
        p={{ base: 4, sm: 8 }}
        overflow="hidden"
        rounded="lg"
        bg={useColorModeValue("whiteAlpha.700", "gray.800")}
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 720 350"
          style={{ position: "absolute", inset: "0", pointerEvents: "none" }}
        >
          <g fill="#f35e3f" fillOpacity="0.1">
            <path d="M650.023 55.55c-6.78-.558-13.401-2.139-19.762-4.548-17.76-6.734-38.778-4.98-54.808 5.343-19.727 12.706-30.764 37.663-26.885 60.807 1.873 11.179 6.84 22.835 2.652 33.369-7.629 19.192-37.848 18.017-49.142 35.309-8.487 12.993-2.455 30.61 6.494 43.289 16.701 23.66 43.803 40.36 72.718 42.021 28.913 1.662 58.818-12.816 73.345-37.869 3.349-5.778 5.919-12.14 6.421-18.8.84-11.135-4.105-21.946-4.418-33.108-.501-17.807 10.553-33.544 19.961-48.671 9.408-15.129 17.814-33.483 11.685-50.212-3.711-10.125-12.397-17.872-22.195-22.384-5.517-2.54-11.377-4.16-16.066-4.546zM160.188 222.681c-13.337-9.469-32.287-10.262-46.369-1.939-11.1 6.56-18.89 17.927-30.4 23.736-10.462 5.281-22.71 5.339-34.018 8.414a65.23 65.23 0 00-27.02 14.96c-7.111 6.567-12.987 16.701-9.189 25.606 2.774 6.501 9.717 10.004 16.13 12.977 27.547 12.772 57.744 25.854 87.295 18.865 11.99-2.834 23.024-8.872 33.006-16.097 14.794-10.704 28.144-25.169 31.724-43.076 3.58-17.907-8.136-34.2-21.159-43.446M77.277-59.39l-90.465 29.729c-12.845 4.222-25.97 8.59-36.642 16.894-10.674 8.3-18.591 21.452-16.956 34.873 1.141 9.35 6.76 17.718 13.9 23.863 23.014 19.816 57.058 17.088 86.565 24.273 39.656 9.655 76.523 38.852 116.692 31.619 31.999-5.759 56.797-36.385 58.655-68.844 1.856-32.457-17.54-64.401-45.804-80.468-28.263-16.069-64.487-18.99-85.945-11.94"></path>
          </g>
        </svg> */}

        <Image
          src={pattern}
          alt="pattern"
          style={{ position: "absolute", inset: "0", pointerEvents: "none" }}
          width="100%"
          height="100%"
          objectFit="fill"
        />

        <Flex zIndex={1} direction="column" gap={5} textAlign="left">
          <Heading fontSize="5xl" fontWeight="bold" mb={5}>
            Rent a vehicle with ease
          </Heading>

          <Flex
            direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
            gap={10}
            whiteSpace="nowrap"
            justifyContent="space-between"
            align="center"
          >
            <Box width="100%">
              <Flex direction="row" gap={3}>
                <Icon name="car" />
                <FormLabel>Select Vehicle Type</FormLabel>
              </Flex>

              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>

            <Box width="100%">
              <Flex direction="row" gap={3}>
                <Icon name="car" />
                <FormLabel>Select Vehicle</FormLabel>
              </Flex>

              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>

            <Box width="100%">
              <Flex direction="row" gap={3}>
                <Icon name="home-pin" />
                <FormLabel>Select Pick-up Location</FormLabel>
              </Flex>

              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>

            <Box width="100%">
              <Flex direction="row" gap={3}>
                <Icon name="drop-off-pin" />
                <FormLabel>Select Drop-off Location</FormLabel>
              </Flex>

              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
          </Flex>

          <Flex
            direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
            gap={10}
            whiteSpace="nowrap"
            justifyContent="center"
            align="center"
          >
            <Box width="100%">
              <Flex direction="row" gap={3}>
                <Icon name="calendar-with-time" />
                <FormLabel>Select Pick-up Date</FormLabel>
              </Flex>

              <Input type="date" placeholder="Select option" />
            </Box>

            <Box width="100%">
              <Flex direction="row" gap={3}>
                <Icon name="calendar-with-time" />
                <FormLabel>Select Drop-off Date</FormLabel>
              </Flex>

              <Input type="date" placeholder="Select option" />
            </Box>
          </Flex>

          <Flex justify="center">
            <Button colorScheme="green" w="md">
              Search now
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  </Box>
);

export default Rent;
