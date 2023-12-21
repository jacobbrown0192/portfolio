import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { Icon as Iconify } from "@iconify/react";

interface ColorModeButtonProps extends ButtonProps {
  colorMode: "light" | "dark";
  onClick: () => void;
}

export const ColorModeButton = ({
  colorMode,
  onClick,
  ...props
}: ColorModeButtonProps) => (
  <Button
    onClick={onClick}
    variant={"colorMode"}
    aria-label={"Toggle Color Mode"}
    {...props}
  >
    {colorMode === "light" ? (
      <Icon as={Iconify} icon={"fa6-solid:sun"} />
    ) : (
      <Icon as={Iconify} icon={"fa6-solid:moon"} />
    )}
  </Button>
);
