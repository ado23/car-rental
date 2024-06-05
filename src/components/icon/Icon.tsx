import { FC } from "react";

import { IconNames } from "assets/icons/icons";
import sprite from "assets/icons/sprite.svg";

interface ISvgIcon {
  name: `${IconNames}`;
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  fill?: string;
  color?: string;
}

const Icon: FC<ISvgIcon> = ({ name, width = "24px", height = "24px", ...rest }) => {
  //   const spriteName = `${sprite}?v=${Date.now()}+#${name}`;
  const spriteName = `${sprite}?v=#${name}`;

  return (
    <svg width={width} height={height} aria-label="app-icon-component" {...rest}>
      <use href={spriteName} />
    </svg>
  );
};

export default Icon;
