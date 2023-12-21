import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { IconListWithToolTip } from "@components/components/SkillIconList";
import {
  backendSkills,
  frontendSkills,
  otherSkills,
} from "@components/components/skills";
import { PageHeading } from "@components/components/pageHeadering";
import React from "react";

const SkillsHeader = ({
  children,
  ...headingProps
}: {
  children: React.ReactNode;
}) => {
  return (
    <Heading fontSize="4" pb="5" {...headingProps}>
      {children}
    </Heading>
  );
};

const SkillsSection = ({ children }: { children: React.ReactNode }) => {
  return <Box>{children}</Box>;
};

export const SkillsPage = ({}) => {
  return (
    <Box id="skills" pb={40}>
      <PageHeading title="skills" />
      <Text>
        Here are the tools, skills, and technologies I can use to bring products
        to life.
      </Text>
      <Stack gap={10} pt={4}>
        <SkillsSection>
          <SkillsHeader>Frontend Languages & Frameworks</SkillsHeader>
          <IconListWithToolTip iconList={frontendSkills} />
        </SkillsSection>
        <SkillsSection>
          <SkillsHeader>Backend Libraries & Services</SkillsHeader>
          <IconListWithToolTip iconList={backendSkills} />
        </SkillsSection>
        <SkillsSection>
          <SkillsHeader>Tools & Platforms & More</SkillsHeader>
          <IconListWithToolTip iconList={otherSkills} />
        </SkillsSection>
      </Stack>
    </Box>
  );
};
