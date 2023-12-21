import { Icon as Iconify, IconifyIcon } from "@iconify/react";
import { Icon, Link, Stack, StackProps } from "@chakra-ui/react";

export interface IconWithLinkProps {
  icon: IconifyIcon | string;
  url: string;
}

interface VerticalIconListProps extends StackProps {
  iconList: IconWithLinkProps[];
  linkVariant?: string;
}

export const IconList = ({
  iconList,
  linkVariant = "socials",
  ...rest
}: VerticalIconListProps) => {
  return (
    <Stack gap={4} {...rest}>
      {iconList.map((icon, index) => (
        <Link variant={linkVariant} href={icon.url} key={index} isExternal>
          <Icon as={Iconify} icon={icon.icon} key={index} />
        </Link>
      ))}
    </Stack>
  );
};
