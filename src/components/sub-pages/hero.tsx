import { Image } from "@chakra-ui/image";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export const HeroPage = ({}) => {
  return (
    <Box
      id={"hero"}
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        gridTemplateColumns={{ base: "1fr", lg: "2fr 1fr" }}
        rowGap="3rem"
        columnGap="2rem"
      >
        <GridItem alignSelf="center" order={{ base: 1, lg: 0 }} margin="auto">
          <Heading fontSize="clamp(2rem, 6vw, 8rem)">JACOB BROWN</Heading>
          <Text>Software Engineer & Full Stack Developer</Text>
        </GridItem>
        <GridItem
          margin="auto"
          maxW={{
            base: "200px",
            sm: "300px",
            md: "300px",
            lg: "250px",
            xl: "350px",
          }}
        >
          <Image
            src="/headshot2020.jpg"
            alt="Jacob Brown"
            borderRadius="image"
            width="400px"
            height={{ base: "200px", sm: "400px" }}
            objectFit="cover"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
