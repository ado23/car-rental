import { Box, Button } from "@chakra-ui/react";
import { FC } from "react";

const ErrorFallback: FC<{ error: Error; resetErrorBoundary: () => void }> = ({
  error,
  resetErrorBoundary
}) => (
  <Box>
    <h1>Something went wrong.</h1>
    <p>{error.message}</p>
    <Button onClick={resetErrorBoundary}>Try again</Button>
  </Box>
);

export default ErrorFallback;
