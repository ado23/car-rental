import { IconButton, useColorMode } from "@chakra-ui/react";

import { Icon } from "components/index";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      size="md"
      icon={
        <Icon
          name={colorMode === "light" ? "moon" : "sun-outline"}
          fill={colorMode === "light" ? "black" : "white"}
        />
      }
      variant="ghost"
      borderRadius="full"
      onClick={toggleColorMode}
      aria-label="toggle-color-mode"
    />
  );
};

export default ColorMode;
