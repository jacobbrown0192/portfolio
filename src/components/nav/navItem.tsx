import { Flex, Link, LinkProps } from "@chakra-ui/react";
import { scrollTo } from "@components/components/nav/navUtils";
import { NavItemHighlight } from "@components/components/nav/navItemHighlight";

export interface NavItemProps extends LinkProps {
  name: string;
  scrollToId: string;
  href: string;
  setNavLock: (lock: boolean) => void;
}

export const NavItem = ({
  name,
  href,
  scrollToId,
  setNavLock,
  ...props
}: NavItemProps) => {
  return (
    <Flex flexDirection={"column"}>
      <Link
        variant={"navItem"}
        data-peer
        href={href}
        onClick={(e) => {
          e.preventDefault();
          setNavLock(true);
          scrollTo(scrollToId);
          history.pushState({}, "", href);
        }}
        {...props}
      >
        {name}
      </Link>
      <NavItemHighlight />
    </Flex>
  );
};
