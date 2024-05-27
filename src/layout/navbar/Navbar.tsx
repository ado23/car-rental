import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Image,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import logo from "assets/img/logo.png";
import { ColorMode } from "features/index";
import ROUTES from "router/routes";
import MobileNav from "src/layout/navbar/mobile/MobileNav";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="sticky" top="0" backdropFilter="blur(20px)" borderColor="transparent">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align="center"
      >
        <Flex
          ml={{ base: -2 }}
          flex={{ base: 1, md: "auto" }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            variant="ghost"
            onClick={onToggle}
            aria-label="Toggle Navigation"
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            src={logo}
            alt="Logo"
            width="5rem"
            height="4rem"
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
          />

          <Flex display={{ base: "none", md: "flex" }} ml={10} align="center">
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
          <Button fontSize="sm" fontWeight={400} variant="link">
            Sign In
          </Button>
          <Button
            fontSize="sm"
            fontWeight={600}
            colorScheme="blue"
            display={{ base: "none", md: "inline-flex" }}
          >
            Sign Up
          </Button>
          <ColorMode />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction="row" spacing={4}>
      {ROUTES.map(({ name, path }) => (
        <NavLink key={name} to={path}>
          <Text
            pr="12px"
            fontSize="sm"
            fontWeight={500}
            color={linkColor}
            _hover={{ textDecoration: "none", color: linkHoverColor }}
          >
            {name}
          </Text>
        </NavLink>
      ))}
    </Stack>
  );
};

export default Navbar;
