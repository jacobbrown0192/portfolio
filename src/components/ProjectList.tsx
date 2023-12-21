import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import {
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ProjectIconList } from "@components/components/projectIconList";
import { Icon as Iconify } from "@iconify/react";

export type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  codeUrl?: string;
};

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  url,
  codeUrl,
}: ProjectCardProps) => (
  <Card width={{ base: "inherit", sm: "300px" }} variant={"project"}>
    <Image
      src={image}
      h="100px"
      objectFit={"cover"}
      borderTopRadius={"inherit"}
      alt={title}
    />
    <CardBody>
      <Stack>
        <Heading fontSize={4}>{title}</Heading>
        <Text fontSize={1}>{description}</Text>
      </Stack>
    </CardBody>
    <CardFooter>
      <ProjectIconList iconList={technologies} fontSize="24px" />
      <ButtonGroup justifyContent={"flex-end"} gap={4}>
        {url && (
          <Link variant={"projectLink"} href={url} isExternal m={0}>
            <Icon as={Iconify} icon="tabler:external-link" />
          </Link>
        )}
        {codeUrl && (
          <Link variant={"projectLink"} href={codeUrl} isExternal m={0}>
            <Icon as={Iconify} icon="tabler:brand-git" />
          </Link>
        )}
      </ButtonGroup>
    </CardFooter>
  </Card>
);

type ProjectListProps = {
  projectList: ProjectCardProps[];
};

export const ProjectList = ({ projectList }: ProjectListProps) => {
  return (
    <Flex flexWrap="wrap" gap="1rem" justifyContent="center">
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Flex>
  );
};
