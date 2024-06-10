import { Box, Text, Flex, useColorModeValue, Image, Tag } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  image: string;
  step: string;
  title: string;
  description: string;
};

const Card: FC<Props> = ({ image, step, description, title }) => (
  <Flex
    p="1rem"
    align="center"
    borderRadius="lg"
    border="1px solid"
    alignSelf="stretch"
    flexDirection="column"
    w={{ base: "100%", md: 1 / 3 }}
    borderColor={useColorModeValue("gray.100", "gray.700")}
    boxShadow={useColorModeValue(
      "0 4px 6px rgba(160, 174, 192, 0.6)",
      "0 4px 6px rgba(9, 17, 28, 0.9)"
    )}
  >
    <Box maxW="20rem">
      <Box mb="2rem" alignSelf="start">
        <Tag size={{ base: "sm", md: "md" }} variant="solid" colorScheme="blue">
          {step}
        </Tag>
      </Box>

      <Flex gap={5} justify="center" flexDirection="column">
        <Image src={image} alt="calendar" width="20rem" />
        <Text fontSize="lg" fontWeight="700">
          {title}
        </Text>
        <Text fontWeight="300" fontSize={{ base: "sm", md: "sm" }}>
          {description}
        </Text>
      </Flex>
    </Box>
  </Flex>
);

export default Card;
