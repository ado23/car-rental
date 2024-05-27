import { Button, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { ReactNode } from "react";

type SocialButtonProps = {
  children: ReactNode;
  label: string;
  href: string;
};

const SocialButton = ({ children, label, href }: SocialButtonProps) => (
  <Button
    bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
    rounded="full"
    w={8}
    h={8}
    cursor="pointer"
    as="a"
    href={href}
    display="inline-flex"
    alignItems="center"
    justifyContent="center"
    transition="background 0.3s ease"
    _hover={{ bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200") }}
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
  </Button>
);

export default SocialButton;
