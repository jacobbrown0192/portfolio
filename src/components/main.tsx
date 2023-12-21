import { forwardRef } from "@chakra-ui/system";
import { Box, BoxProps } from "@chakra-ui/react";

export const StyledMain = forwardRef<BoxProps, "main">((props, ref) => (
  <Box ref={ref} {...props} />
));
