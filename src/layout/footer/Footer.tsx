import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useColorMode,
  IconButton,
  Input
} from "@chakra-ui/react";

import { Icon } from "components/index";
import { AppStoreBadge } from "layout/footer/components/AppStoreBadge";
import ListHeader from "layout/footer/components/ListHeader";
import { PlayStoreBadge } from "layout/footer/components/PlayStoreBadge";
import SocialButton from "layout/footer/components/SocialButton";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW="100%" py={10}>
        <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }} spacing={8}>
          <Stack spacing={6}>
            <Icon
              name="app-logo"
              width="50%"
              height="50%"
              fill={useColorModeValue("black", "white")}
            />
            <Text fontSize="sm">© 2024 CarLine. All rights reserved</Text>

            <Stack direction="row" spacing={6}>
              <SocialButton label="Facebook" href="#">
                <Icon name="facebook" fill={useColorModeValue("black", "white")} />
              </SocialButton>
              <SocialButton label="Linkedin" href="#">
                <Icon name="linkedin" fill={useColorModeValue("black", "white")} />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <Icon
                  name={colorMode === "light" ? "instagram" : "instagram-outline"}
                  fill={useColorModeValue("black", "white")}
                />
              </SocialButton>
              <SocialButton label="Twitter" href="#">
                <Icon name="twitter" fill={useColorModeValue("black", "white")} />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Company</ListHeader>
            <Link href="#">About us</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact us</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Testimonials</Link>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Support</ListHeader>
            <Link href="#">Help Center</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Legal</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Status</Link>
          </Stack>

          <Stack align="flex-start" gap={6}>
            <Box>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={"row"}>
                <Input
                  placeholder={"Your email address"}
                  bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                  border={0}
                  _focus={{ bg: "whiteAlpha.300" }}
                />
                <IconButton
                  bg={useColorModeValue("green.400", "green.800")}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{ bg: "green.600" }}
                  aria-label="Subscribe"
                  icon={<Icon name="mail" fill="white" />}
                />
              </Stack>
            </Box>

            <Box>
              <ListHeader>Install App</ListHeader>
              <Stack direction={"row"}>
                <button>
                  <AppStoreBadge />
                </button>
                <button>
                  <PlayStoreBadge />
                </button>
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
