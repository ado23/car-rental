import { Flex, FormControl, FormHelperText, FormLabel, Text } from "@chakra-ui/react";
import { Select as ChakraSelect, Props } from "chakra-react-select";
import { FC, ReactElement } from "react";

import { IconNames } from "assets/icons/icons";
import { Icon } from "components/index";

interface SelectProps extends Props {
  label: string;
  icon?: `${IconNames}`;
  error?: string;
  touched?: boolean;
}

const Select: FC<SelectProps> = ({ label, error, touched, icon, ...rest }): ReactElement => (
  <Flex direction="column">
    <FormControl>
      <Flex gap={2} flexDir="column">
        <Flex direction="row" gap={3}>
          {icon ? <Icon name={icon} /> : null}
          <FormLabel m="0px">
            <Text> {label} </Text>
          </FormLabel>
        </Flex>
        <ChakraSelect {...rest} useBasicStyles={true} focusBorderColor="gray.500" />
      </Flex>

      {error && touched && <FormHelperText color="red.500">{error}</FormHelperText>}
    </FormControl>
  </Flex>
);

export default Select;
