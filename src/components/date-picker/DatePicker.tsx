import {
  Text,
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  useColorModeValue,
  FormHelperText
} from "@chakra-ui/react";
import { FC, useCallback, useState } from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

import style from "components/date-picker/style.module.css";
import Icon from "components/icon/Icon";

interface DatePickerProps extends ReactDatePickerProps {
  label: string;
  error?: string;
  touched?: boolean;
}

const DatePicker: FC<DatePickerProps> = ({ label, error, touched, ...rest }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.300");
  const resetIconColor = useColorModeValue("gray.400", "whiteAlpha.400");

  const onChange = useCallback((date: Date | null) => {
    setSelectedDate(date);
  }, []);

  return (
    <Flex direction="column">
      <FormControl>
        <Flex gap={2} flexDir="column">
          <Flex direction="row" gap={3}>
            <Icon name="calendar" />
            <FormLabel m="0px">
              <Text> {label} </Text>
            </FormLabel>
          </Flex>
          <Flex flexDirection="row">
            <Box width="100%">
              <ReactDatePicker
                selected={selectedDate}
                placeholderText="MM/DD/YYYY"
                customInput={
                  <Input
                    placeholder="DD/MM/YYYY"
                    cursor="pointer"
                    value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                    borderRight="none"
                    borderTopEndRadius={0}
                    borderBottomRightRadius={0}
                  />
                }
                wrapperClassName={`${style.wrapper}`}
                {...rest}
                onChange={onChange}
              />
            </Box>

            <Flex>
              {selectedDate && (
                <IconButton
                  size="md"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                    setSelectedDate(null);
                  }}
                  borderRadius={0}
                  aria-label="Clear"
                  icon={<Icon name="close" fill={resetIconColor} />}
                  borderTop="1px solid"
                  borderColor={borderColor}
                  borderBottom="1px solid"
                  borderBottomColor={borderColor}
                  _hover={{ bg: "transparent" }}
                />
              )}
              <InputGroup size="md">
                <InputRightAddon>
                  <Icon name="calendar" />
                </InputRightAddon>
              </InputGroup>
            </Flex>
          </Flex>
        </Flex>

        {error && touched && <FormHelperText color="red.500">{error}</FormHelperText>}
      </FormControl>
    </Flex>
  );
};

export default DatePicker;
