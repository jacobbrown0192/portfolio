import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Box,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import { ProjectIconList } from "@components/components/projectIconList";
import { Image } from "@chakra-ui/image";
import { Icon } from "@iconify/react";

export interface WorkExperienceData {
  title: string;
  company: string;
  companyLogo: string;
  companyUrl: string;
  startYear: number;
  endYear: number;
  description: string;
  technologies: string[];
}

const WorkExperienceAccordionItem = ({
  title,
  company,
  companyLogo,
  companyUrl,
  startYear,
  endYear,
  description,
  technologies,
}: WorkExperienceData) => {
  return (
    <AccordionItem>
      <AccordionButton h={{ base: "auto", sm: "64px", md: "auto" }}>
        <Text flex="3" textAlign="left" pr={4}>
          {title} @ {company}
        </Text>
        <Text
          flex={{ base: "inherit", sm: "inherit" }}
          textAlign={{ base: "center", sm: "right" }}
          pr={2}
          width={{ base: "min-content", sm: "auto" }}
        >
          {startYear} - {endYear}
        </Text>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "3fr 1fr" }}
        minH={"175px"}
      >
        <Flex flexDirection={"column"}>
          <Link wordBreak={"break-word"} href={companyUrl} isExternal>
            <Flex alignItems={"center"} fontWeight={"semibold"} pb={2}>
              <Box pr={2}>
                <Icon icon={"tabler:external-link"} />
              </Box>
              {companyUrl}
            </Flex>
          </Link>
          <Box fontSize={2} pb={4}>
            {description}
          </Box>
          <Box mt={"auto"}>
            <ProjectIconList iconList={technologies} />
          </Box>
        </Flex>
        <Box
          order={{ base: -1, md: 0 }}
          alignSelf={"center"}
          borderRadius={"full"}
          py={{ base: 2, md: 0 }}
        >
          <Image
            m={"auto"}
            width="100px"
            src={companyLogo}
            alt={company}
            borderRadius={"full"}
            bg={"white"}
          />
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
};

interface WorkExperienceAccordionProps extends AccordionProps {
  workExperienceList: WorkExperienceData[];
}

export const WorkExperienceAccordion = ({
  workExperienceList,
  ...props
}: WorkExperienceAccordionProps) => {
  return (
    <Accordion variant={"experience"} allowMultiple {...props}>
      {workExperienceList.map((workExperience, index) => (
        <WorkExperienceAccordionItem {...workExperience} key={index} />
      ))}
    </Accordion>
  );
};
