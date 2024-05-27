import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => (
  <Text fontWeight="500" fontSize="lg" mb={2}>
    {children}
  </Text>
);

export default ListHeader;
