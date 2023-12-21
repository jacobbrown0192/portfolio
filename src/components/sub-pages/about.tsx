import { Box, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { PageHeading } from "@components/components/pageHeadering";

export const AboutPage = ({}) => {
  return (
    <Box h="100%" pb={40} id="about">
      <PageHeading title="About" />
      <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <GridItem alignSelf="center" margin="auto">
          <Image
            borderRadius="image"
            maxW={{ base: "200px", sm: "300px", md: "300px", lg: "400px" }}
            src="/dressshirt2022.jpg"
            alt="Jacob Brown"
          />
        </GridItem>
        <GridItem>
          <Text>Hi there! I&apos;m Jacob Brown.</Text>
          <Text>
            I&apos;m passionate about solving problems to create great products
            leveraging my skills as a software developer and designer. I have
            been designing, developing, and deploying software for over 10 years
            helping to{" "}
            <Link variant={"bodyLink"} href="https://www.colabsoftware.com/">
              bring software design practices to traditional engineering
            </Link>
            ,{" "}
            <Link variant={"bodyLink"} href="https://verafin.com/">
              {" "}
              fight crime
            </Link>
            , and{" "}
            <Link variant={"bodyLink"} href="https://www.milkmoovement.com/">
              get milk to the right place at the right time
            </Link>
            . One thing I learned while working these positions is that I enjoy
            and excel at leading teams to success. coordinating with
            stakeholders and mentoring developers to be the best they can be. I
            also love learning and tinkering with new technologies and working
            on interesting challenges. If you ever want to bounce ideas off of
            me or just chat, reach out and say hello!
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
