import {
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { Icon } from "components/index";
import { ColorMode } from "features/index";
import ROUTES from "router/routes";
import MobileNav from "src/layout/navbar/mobile/MobileNav";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  return (
    <header style={{ zIndex: 99, position: "relative" }}>
      <Flex
        minH="80px"
        align="center"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom="1px solid"
        backdropFilter="blur(20px)"
        color={useColorModeValue("gray.600", "white")}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        bg={useColorModeValue("whiteAlpha.400", "blackAlpha.400")}
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
            icon={
              <Icon name={isOpen ? "close" : "menu"} fill={useColorModeValue("black", "white")} />
            }
          />
        </Flex>

        <Flex
          flex={{ base: 1 }}
          justifyContent={{ base: "center", md: "center" }}
          alignItems="center"
        >
          <Flex justifySelf="flex-start" alignItems="center">
            <Icon name={isMobile ? "logo" : "app-logo"} height="3rem" width="11rem" />
          </Flex>
          <Flex display={{ base: "none", md: "flex" }} justifyContent="center" flex={1}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row">
          <IconButton
            aria-label="Sign Up"
            icon={<Icon name="user-rounded" fill={useColorModeValue("black", "white")} />}
            borderRadius="full"
            variant="ghost"
            size="md"
          />
          <ColorMode />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </header>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.800", "gray.200");
  const linkHoverColor = useColorModeValue("blue.500", "cyan.500");

  return (
    <Stack direction="row" spacing={4}>
      {ROUTES.map(({ name, path }) => (
        <NavLink key={name} to={path}>
          <Text
            as="span"
            px={2}
            fontSize="lg"
            fontWeight={500}
            whiteSpace={"nowrap"}
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
