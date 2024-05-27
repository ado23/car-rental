import { MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image
} from "@chakra-ui/react";

import logo from "assets/img/logo.png";
import { AppStoreBadge } from "layout/footer/components/AppStoreBadge";
import ListHeader from "layout/footer/components/ListHeader";
import { PlayStoreBadge } from "layout/footer/components/PlayStoreBadge";
import SocialButton from "layout/footer/components/SocialButton";

const Footer = () => (
  <Box
    bg={useColorModeValue("gray.50", "gray.900")}
    color={useColorModeValue("gray.700", "gray.200")}
  >
    <Container as={Stack} maxW="100%" py={10}>
      <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }} spacing={8}>
        <Stack spacing={6}>
          <Box>
            <Image src={logo} width="7rem" height="5rem" alt="CarLine logo" />
          </Box>
          <Text fontSize="sm">© 2024 CarLine. All rights reserved</Text>
          <Stack direction="row" spacing={6}>
            <SocialButton label="Twitter" href="#">
              <MoonIcon />
            </SocialButton>
            <SocialButton label="YouTube" href="#">
              <MoonIcon />
            </SocialButton>
            <SocialButton label="Instagram" href="#">
              <MoonIcon />
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

        <Stack align="flex-start">
          <ListHeader>Install App</ListHeader>
          <button>
            <AppStoreBadge />
          </button>
          <button>
            <PlayStoreBadge />
          </button>
        </Stack>
      </SimpleGrid>
    </Container>
  </Box>
);

export default Footer;
