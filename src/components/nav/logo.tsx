import { Box, BoxProps, Link } from "@chakra-ui/react";
import { scrollTo } from "@components/components/nav/navUtils";
import { Image } from "@chakra-ui/image";

export const Logo = (props: BoxProps) => {
  return (
    <Box alignSelf={"center"} {...props}>
      <Link
        href="/"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("hero");
          history.pushState({}, "", "/");
        }}
      >
        <Image alt={"Jacob Logo"} src="./Jacob_Logo.png" h="64px" />
      </Link>
    </Box>
  );
};
