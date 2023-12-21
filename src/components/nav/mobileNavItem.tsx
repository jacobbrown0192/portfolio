import { NavItemProps } from "@components/components/nav/navItem";
import { Flex, Link } from "@chakra-ui/react";
import { scrollTo } from "@components/components/nav/navUtils";
import { NavItemHighlight } from "@components/components/nav/navItemHighlight";

interface MobileNavItemProps extends NavItemProps {
  onMobileClose: () => void;
}

export const MobileNavItem = ({
  name,
  href,
  scrollToId,
  onMobileClose,
  setNavLock,
  ...props
}: MobileNavItemProps) => {
  return (
    <Flex flexDirection={"column"}>
      <Link
        variant={"mobileNavItem"}
        data-peer
        href={href}
        onClick={(e) => {
          e.preventDefault();
          setNavLock(true);
          scrollTo(scrollToId);
          onMobileClose();
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
