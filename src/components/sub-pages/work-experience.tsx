import { Box } from "@chakra-ui/react";
import { WorkExperienceAccordion } from "@components/components/workExperienceAccordion";
import { workExperiences } from "@components/components/workExperience";
import { PageHeading } from "@components/components/pageHeadering";

export const WorkExperience = ({}) => {
  return (
    <Box id="experience" width="100%" pb={40}>
      <PageHeading title={"Experience"} />
      <WorkExperienceAccordion
        workExperienceList={workExperiences}
        maxWidth={"650px"}
        margin={"auto"}
      />
    </Box>
  );
};
