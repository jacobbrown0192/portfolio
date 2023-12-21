import { Box } from "@chakra-ui/react";
import { ProjectList } from "@components/components/ProjectList";
import { projects } from "@components/components/projects";
import { PageHeading } from "@components/components/pageHeadering";

export const ProjectsPage = ({}) => {
  return (
    <Box id="projects" pb={40}>
      <PageHeading title="Projects" />
      <Box>
        <ProjectList projectList={projects} />
      </Box>
    </Box>
  );
};
