import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MobileNavItem } from "@components/components/nav/mobileNavItem";
import { IconList } from "@components/components/iconList";
import { socialsData } from "@components/components/socialsData";
import { ColorModeButton } from "@components/components/nav/colorModeButton";

interface MobileNavProps {
  isOpen: boolean;
  onMobileClose: () => void;
  setNavLock: (lock: boolean) => void;
}

export const MobileNav = ({
  isOpen,
  onMobileClose,
  setNavLock,
}: MobileNavProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onMobileClose}
      placement={"right"}
      size={"full"}
    >
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody bg={"background"} _dark={{ bg: "backgroundDark" }}>
          <Stack>
            <MobileNavItem
              scrollToId={"hero"}
              href="/#"
              name="Home"
              onMobileClose={onMobileClose}
              setNavLock={setNavLock}
            />
            <MobileNavItem
              scrollToId={"about"}
              href="/#about"
              name="About"
              onMobileClose={onMobileClose}
              setNavLock={setNavLock}
            />
            <MobileNavItem
              scrollToId={"projects"}
              href="/#projects"
              name="Projects"
              onMobileClose={onMobileClose}
              setNavLock={setNavLock}
            />
            <MobileNavItem
              scrollToId={"skills"}
              href="/#skills"
              name="Skills"
              onMobileClose={onMobileClose}
              setNavLock={setNavLock}
            />
            <MobileNavItem
              scrollToId={"experience"}
              href="/#experience"
              name="Experience"
              onMobileClose={onMobileClose}
              setNavLock={setNavLock}
            />
            <IconList
              direction={"row"}
              py={2}
              ml={4}
              iconList={socialsData}
              linkVariant={"mobileSocials"}
            />
            <ColorModeButton
              ml={4}
              onClick={toggleColorMode}
              colorMode={colorMode}
            />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
