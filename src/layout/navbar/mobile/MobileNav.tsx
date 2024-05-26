import { Flex, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import ROUTES, { IRoute } from "router/routes";

type NavItem = Pick<IRoute, "name" | "path">;

const MobileNavItem = ({ name, path }: NavItem) => (
  <Stack spacing={4}>
    <NavLink to={path}>
      <Flex py={2} align={"center"} justify={"space-between"} _hover={{ textDecoration: "none" }}>
        <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
          {name}
        </Text>
      </Flex>
    </NavLink>
  </Stack>
);

const MobileNav = () => (
  <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
    {ROUTES.map(({ name, path }) => (
      <MobileNavItem key={`mobile-nav-link-${name}`} name={name} path={path} />
    ))}
  </Stack>
);

export default MobileNav;
