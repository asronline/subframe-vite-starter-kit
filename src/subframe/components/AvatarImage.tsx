"use client";
/*
 * Documentation:
 * Avatar Image — https://app.subframe.com/library?component=Avatar+Image_ce9959fe-701f-440f-913c-132cdebc1dd5
 */

import classNames from "classnames";
import * as SubframeCore from "@subframe/core";
import React from "react";

interface AvatarImageRootProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: "Default" | "Small" | "XSmall";
  src?: string;
  className?: string;
}

const AvatarImageRoot = React.forwardRef<HTMLElement, AvatarImageRootProps>(
  function AvatarImageRoot(
    {
      size = "Default",
      src = "https://res.cloudinary.com/dnkpdfdai/image/upload/v1653246547/photo-1494790108377-be9c29b29330_b4vlzj.avif",
      className,
      ...otherProps
    }: AvatarImageRootProps,
    ref
  ) {
    return (
      <img
        className={SubframeCore.twClassNames(
          "group/ce9959fe h-9 w-9 object-cover [clip-path:circle()]",
          {
            "h-5 w-5 flex-none": size === "XSmall",
            "h-7 w-7 flex-none": size === "Small",
          },
          className
        )}
        src={src}
        ref={ref as any}
        {...otherProps}
      />
    );
  }
);

export const AvatarImage = AvatarImageRoot;
