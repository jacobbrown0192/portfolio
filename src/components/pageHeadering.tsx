import { Divider, Flex, Heading } from "@chakra-ui/react";

export const PageHeading = ({ title }: { title: string }) => {
  return (
    <Flex justifyContent="center" py="2rem">
      <Divider
        orientation={"horizontal"}
        variant={"pageHeading"}
        width="4rem"
      />
      <Heading fontSize="5" width="fit-content" px="1rem">
        {title.toUpperCase()}
      </Heading>
      <Divider
        orientation={"horizontal"}
        variant={"pageHeading"}
        width="4rem"
      />
    </Flex>
  );
};
