import { Icon as Iconify, IconifyIcon } from "@iconify/react";
import {
  Box,
  BoxProps,
  Icon,
  Text,
  Tooltip,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Image } from "@chakra-ui/image";
import { forwardRef } from "@chakra-ui/system";

type IconListProps = {
  iconList: IconSkillToolTip[];
};

export interface IconSkillToolTip {
  icon: IconifyIcon | string;
  label: string;
  color?: string;
  note?: string;
  svg?: string;
}

const SkillTooltip = ({ label, note }: { label: string; note?: string }) => {
  return (
    <>
      {label}
      {note && <Text>{note}</Text>}
    </>
  );
};

interface SkillIconProps extends BoxProps {
  iconItem: IconSkillToolTip;
  setIsToolTipOpen: (isOpen: boolean) => void;
  variant?: string;
}

const SkillIcon = forwardRef<SkillIconProps, "div">(
  ({ iconItem, setIsToolTipOpen, variant, ...rest }, ref) => {
    const styles = useStyleConfig("SkillIcon", { variant });
    return (
      <Box
        ref={ref}
        onMouseEnter={() => setIsToolTipOpen(true)}
        onMouseLeave={() => setIsToolTipOpen(false)}
        onClick={() => setIsToolTipOpen(true)}
        __css={styles}
        {...rest}
      >
        {iconItem.svg ? (
          <Image
            w={"32px"}
            h={"32px"}
            src={iconItem.svg}
            alt={iconItem.label}
          />
        ) : (
          <Icon
            as={Iconify}
            icon={iconItem.icon}
            color={iconItem.color ?? "inherit"}
            _dark={{
              color: iconItem.color ?? "iconDark",
            }}
          />
        )}
      </Box>
    );
  }
);

function ToolTipSkillIcon(props: { iconItem: IconSkillToolTip }) {
  const [isLabelOpen, setIsToolTipOpen] = useState(false);
  return (
    <Tooltip
      borderRadius={"md"}
      py={"8px"}
      px={"8px"}
      hasArrow
      label={<SkillTooltip {...props.iconItem} />}
      placement={"top"}
      isOpen={isLabelOpen}
    >
      <SkillIcon
        setIsToolTipOpen={setIsToolTipOpen}
        iconItem={props.iconItem}
      />
    </Tooltip>
  );
}

export const IconListWithToolTip = ({ iconList }: IconListProps) => {
  return (
    <Box
      display={"flex"}
      columnGap={8}
      rowGap={5}
      justifyItems={"center"}
      flexWrap={"wrap"}
    >
      {iconList.map((iconItem, index) => (
        <ToolTipSkillIcon key={index} iconItem={iconItem} />
      ))}
    </Box>
  );
};
