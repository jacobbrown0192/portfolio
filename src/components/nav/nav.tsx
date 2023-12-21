import { Box, Button, useColorMode, useDisclosure } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Logo } from "@components/components/nav/logo";
import { NavItem } from "@components/components/nav/navItem";
import { ColorModeButton } from "@components/components/nav/colorModeButton";
import { ChakraMotionBox } from "@components/components/nav/chakraMotionBox";
import { MobileNav } from "@components/components/nav/mobileNav";

export const Nav = ({}) => {
  const { scrollY } = useScroll({});
  const [yPosition, setYPosition] = useState(-1);
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [navLock, setNavLock] = useState(false);
  const {
    isOpen: isMobileNavOpen,
    onOpen: onMobileNavOpen,
    onClose: onMobileNavClose,
  } = useDisclosure({ defaultIsOpen: false });
  const { colorMode, toggleColorMode } = useColorMode();

  useMotionValueEvent(scrollY, "change", (latest) => {
    //this seems like there should be a better way to do this
    if (yPosition === -1) {
      setYPosition(latest);
      return;
    }
    if (latest < 100) {
      onOpen();
    } else {
      if (latest > yPosition) {
        onClose();
      } else {
        onOpen();
      }
    }
    setYPosition(latest);
  });

  useEffect(() => {
    const handleScrollEnd = () => {
      if (navLock) {
        setNavLock(false);
        onClose();
      }
    };

    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, [navLock, onClose]);

  return (
    <>
      <MobileNav
        isOpen={isMobileNavOpen}
        onMobileClose={onMobileNavClose}
        setNavLock={setNavLock}
      />
      <ChakraMotionBox
        zIndex={1}
        animate={{ height: isOpen ? "100px" : 0 }}
        transition={{ ease: "easeOut", duration: "0.5" }}
        overflow={"hidden"}
        whiteSpace={"nowrap"}
        position={"fixed"}
        width={"100vw"}
        top={"0"}
        height={isOpen ? "100px" : "0"}
        display="flex"
        justifyContent="space-between"
        flexDirection={"row"}
        boxShadow={"#2123261a 0px 10px 10px -10px;"}
        bg={"background"}
        _dark={{
          bg: "backgroundDark",
          boxShadow: "#dcdee11a 0px 10px 10px -10px;",
        }}
      >
        <Logo ml={4} />
        <Button
          onClick={onMobileNavOpen}
          display={{ base: "inherit", md: "none" }}
          aria-label={"Open Navigation Menu"}
          mr={8}
          my={"auto"}
          variant={"hamburger"}
        >
          <HamburgerIcon />
        </Button>
        <Box
          display={{ base: "none", md: "flex" }}
          justifyContent="space-between"
          alignItems={"center"}
          mr={8}
        >
          <NavItem
            scrollToId={"hero"}
            href="/#"
            name="Home"
            setNavLock={setNavLock}
          />
          <NavItem
            scrollToId={"about"}
            href="/#about"
            name="About"
            setNavLock={setNavLock}
          />
          <NavItem
            scrollToId={"projects"}
            href="/#projects"
            name="Projects"
            setNavLock={setNavLock}
          />
          <NavItem
            scrollToId={"skills"}
            href="/#skills"
            name="Skills"
            setNavLock={setNavLock}
          />
          <NavItem
            scrollToId={"experience"}
            href="/#experience"
            name="Experience"
            setNavLock={setNavLock}
          />
          <ColorModeButton
            onClick={toggleColorMode}
            colorMode={colorMode}
            ml={"2"}
          />
        </Box>
      </ChakraMotionBox>
    </>
  );
};
