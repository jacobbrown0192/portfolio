import { Box, BoxProps, Text } from "@chakra-ui/react";

export const Footer = (props: BoxProps) => {
  return (
    <Box px="6rem" {...props}>
      <Text margin="auto" width="fit-content" py="2rem">
        Jacob Brown ©
      </Text>
    </Box>
  );
};
