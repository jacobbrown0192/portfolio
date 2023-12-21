import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

interface NavItemHighlightProps extends BoxProps {
  variant?: string;
}

export const NavItemHighlight = ({
  variant,
  ...props
}: NavItemHighlightProps) => {
  const styles = useStyleConfig("NavHighlight", { variant });

  return <Box width="auto" __css={styles} {...props} />;
};
