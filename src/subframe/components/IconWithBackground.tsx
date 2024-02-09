"use client";
/*
 * Documentation:
 * Icon with background — https://app.subframe.com/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 */

import classNames from "classnames";
import * as SubframeCore from "@subframe/core";
import React from "react";

interface IconWithBackgroundRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "Default" | "Neutral" | "Error" | "Warning" | "Success";
  size?: "Default" | "Large" | "XLarge" | "XXLarge";
  icon?: SubframeCore.IconName;
  className?: string;
}

const IconWithBackgroundRoot = React.forwardRef<
  HTMLElement,
  IconWithBackgroundRootProps
>(function IconWithBackgroundRoot(
  {
    variant = "Default",
    size = "Default",
    icon = "FeatherCheck",
    className,
    ...otherProps
  }: IconWithBackgroundRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/c5d68c0e flex h-5 w-5 items-center justify-center gap-2 rounded-full bg-brand-100",
        {
          "h-12 w-12 flex-none": size === "XXLarge",
          "h-9 w-9 flex-none": size === "XLarge",
          "h-7 w-7 flex-none": size === "Large",
          "bg-success-100": variant === "Success",
          "bg-warning-100": variant === "Warning",
          "bg-error-100": variant === "Error",
          "bg-neutral-100": variant === "Neutral",
        },
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <SubframeCore.Icon
        className={SubframeCore.twClassNames(
          "text-caption font-caption text-brand-800",
          {
            "text-[24px] font-[500] leading-[38px]": size === "XXLarge",
            "text-heading-3 font-heading-3": size === "XLarge",
            "text-body-bold font-body-bold": size === "Large",
            "text-success-800": variant === "Success",
            "text-warning-800": variant === "Warning",
            "text-error-800": variant === "Error",
            "text-neutral-800": variant === "Neutral",
          }
        )}
        name={icon}
      />
    </div>
  );
});

export const IconWithBackground = IconWithBackgroundRoot;
