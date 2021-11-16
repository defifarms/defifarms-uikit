import styled, { DefaultTheme } from "styled-components";
import { space, variant } from "styled-system";
import { Colors } from "../../theme/types";
import { scaleVariants, styleVariants } from "./theme";
import { TagProps, variants } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getOutlineStyles = ({
  outline,
  theme,
  variant: variantKey = variants.PRIMARY,
}: ThemedProps) => {
  if (outline) {
    const themeColorKey = styleVariants[variantKey]
      .backgroundColor as keyof Colors;
    const color = theme.colors[themeColorKey];

    return `
      color: ${color};
      background: transparent;
    `;
  }

  return "";
};

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  border-radius: 16px;
  color: #4663de;
  display: inline-flex;
  font-weight: 600;
  white-space: nowrap;
  font-size: 12px;
  line-height: 18px;
  background-color: #e6edfc;
  & > svg {
    fill: currentColor;
  }

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${space}

  ${getOutlineStyles}
`;

export default null;
