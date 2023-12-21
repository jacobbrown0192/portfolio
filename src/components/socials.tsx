import { Box, BoxProps, Divider } from "@chakra-ui/react";
import { IconList } from "@components/components/iconList";
import { socialsData } from "@components/components/socialsData";

export const Socials = (props: BoxProps) => {
  return (
    <Box
      width="40px"
      position="fixed"
      bottom="0"
      left="40px"
      right="auto"
      {...props}
    >
      <IconList alignItems={"center"} pb={2} iconList={socialsData} />
      <Divider variant={"socialsLine"} orientation={"vertical"} height="90px" />
    </Box>
  );
};
