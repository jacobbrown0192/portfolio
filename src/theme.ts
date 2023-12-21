import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#0088EE", //6cbbfe
  secondary: "#8377D1",
  tertiary: "#FFEAD2",

  background: "#FFEAD2",
  backgroundDark: "#16293D",

  offColorBackground: "#FFE2C2",
  offColorBackgroundDark: "#1F3A56",
  offColorBackgroundDark2: "#244262",

  navBorderColor: "#FFE2C2",

  heading: "#000000",
  h2: "#000000",
  text: "#000000",
  textDark: "#CBD5E0",
  iconDark: "#CBD5E0",
  buttonShadow: "#0366d64d",
};

const SkillIcon = defineStyleConfig({
  baseStyle: {
    height: "12",
    width: "12",
    borderRadius: "md",
    padding: "0.5rem",
    // boxShadow="#0088ee40 0px 2px 4px, #0088ee30 0px 7px 13px -3px, #0088ee20 0px -3px 0px inset;"
    boxShadow: "0 4px 6px -1px #0088ee80,0 2px 4px -2px #0088ee60",
    // boxShadow="#0088ee50 0px 4px 12px;"
    _dark: {
      bg: "offColorBackgroundDark2",
    },
  },
});

const NavHighlight = defineStyleConfig({
  baseStyle: {
    height: "5px",
    bg: "transparent",
    borderRadius: "full",
    _peerHover: {
      bg: "primary",
      transition: "all 1.5s ease;",
    },
  },
});

const Divider = defineStyleConfig({
  variants: {
    pageHeading: {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: "secondary",
      alignSelf: "center",
      borderRadius: "lg",
    },
    socialsLine: {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: "text",
      width: "fit-content",
      mx: "auto",
      _dark: {
        borderColor: "textDark",
      },
    },
  },
});

const Icon = defineStyleConfig({
  baseStyle: {
    boxSize: 8,
  },
});

const Card = defineStyleConfig({
  variants: {
    project: {
      // @ts-ignore
      container: {
        maxW: "300px",
        minH: "400px",
        bg: "offColorBackground",
        _dark: {
          bg: "offColorBackgroundDark",
        },
      },
      footer: {
        display: "grid",
        gridTemplateColumns: "1fr",
        rowGap: 4,
        pt: 0,
      },
    },
  },
});

const Link = defineStyleConfig({
  baseStyle: {
    color: "text",
    _dark: {
      color: "textDark",
    },
  },
  variants: {
    socials: {
      display: "block",
      width: "fit-content",
      _hover: {
        color: "primary",
        _dark: {
          color: "primary",
        },
      },
    },
    mobileSocials: {
      h: "8",
      _hover: {
        color: "primary",
        _dark: {
          color: "primary",
        },
      },
    },
    projectLink: {
      display: "block",
      width: "fit-content",
      color: "black",
      _hover: {
        color: "primary",
        _dark: {
          color: "primary",
        },
      },
      _dark: {
        color: "secondary",
      },
    },
    bodyLink: {
      color: "primary",
      textDecoration: "underline",
      _dark: {
        color: "primary",
      },
      _hover: {
        color: "secondary",
        _dark: {
          color: "secondary",
        },
      },
    },
    navItem: {
      color: "black",
      py: "6",
      px: "6",
      fontWeight: "semibold",
      alignSelf: "center",
      _hover: {
        textDecoration: "none",
        // color: "black",
        // _dark: {
        //   color: "white",
        // },
      },
    },
    mobileNavItem: {
      color: "black",
      px: "6",
      pt: "4",
      pb: "3",
      fontWeight: "semibold",
      _dark: {
        color: "white",
      },
      _hover: {
        textDecoration: "none",
        color: "black",
        _dark: {
          color: "white",
        },
      },
    },
  },
});

const Accordion = defineStyleConfig({
  variants: {
    experience: {
      root: {
        display: "flex",
        flexDirection: "column",
        gap: "4",
      },
      container: {
        border: "0",
      },
      button: {
        borderRadius: "3",
        bg: "primary",
        // my: "4",
        _hover: {
          bg: "primary",
        },
        _dark: {
          color: "iconDark",
        },
      },
      panel: {
        my: "4",
        borderRadius: "3",
        bg: "offColorBackground",
        _dark: {
          bg: "offColorBackgroundDark",
        },
      },
    },
  },
});

const Button = defineStyleConfig({
  variants: {
    hamburger: {
      bg: "offColorBackground",
      width: "fit-content",
      p: "2",
      _hover: {
        boxShadow: "var(--chakra-colors-buttonShadow) 0px 0px 0px 3px;",
      },
      _dark: {
        bg: "offColorBackgroundDark",
        color: "textDark",
      },
    },
    colorMode: {
      bg: "offColorBackground",
      width: "fit-content",
      padding: "2",
      h: "auto",
      _hover: {
        boxShadow: "var(--chakra-colors-buttonShadow) 0px 0px 0px 3px;",
      },
      _dark: {
        bg: "offColorBackgroundDark",
        color: "textDark",
      },
    },
  },
});

const Text = defineStyleConfig({
  baseStyle: {
    color: "text",
    _dark: {
      color: "textDark",
    },
  },
});

const Heading = Text;

const Tooltip = defineStyleConfig({
  baseStyle: {
    color: "textDark",
    _dark: {
      color: "text",
    },
  },
});

export const theme = extendTheme({
  colors: colors,
  radii: {
    image: "3rem",
  },
  fontSizes: {
    0: "12px",
    1: "14px",
    2: "16px",
    3: "20px",
    4: "24px",
    5: "32px",
    6: "48px",
    7: "64px",
  },
  components: {
    SkillIcon,
    NavHighlight,
    Divider,
    Icon,
    Card,
    Link,
    Accordion,
    Button,
    Text,
    Heading,
    Tooltip,
  },
});
