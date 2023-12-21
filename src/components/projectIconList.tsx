import { HStack, Icon } from "@chakra-ui/react";
import { Icon as Iconify } from "@iconify/react";

export const ProjectIconList = ({
  iconList,
}: {
  iconList: string[];
  fontSize?: string;
}) => {
  return (
    <HStack gap={6} flexWrap={"wrap"}>
      {iconList.map((icon, index) => (
        <Icon as={Iconify} key={index} icon={icon} />
      ))}
    </HStack>
  );
};
